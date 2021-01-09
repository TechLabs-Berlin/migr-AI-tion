# import type hints
from typing import List
from sqlalchemy.orm import Session

# import dependencies
import os
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
from uuid import uuid4 # this is for creating image ids
import PIL
from PIL import Image as pil_image # this is to read and save images

from database.database import get_session
from models.images import Image
from models.tags import Tag

from router.tags import create_tag
from router.images_tags import create_images_tags

from views.responses.images import ReadImage
from views.responses.images import ReadImageList
from views.requests.images import CreateImage

# intialize new router
router = APIRouter()

# C = CREATE -> @router.post("")
# R = READ -> @router.get("/{id}")
# U = UPDATE -> @router.patch("/{id}")
# D = DELETE -> @router.delete("/{id}")
# L = LIST -> @router.get("")

@router.post("", response_model=ReadImage)
async def create_image(caption: str, tags: List, file: UploadFile = File(...), session: Session = Depends(get_session)) -> Image:
    """[summary]

    Args:
        caption (str): Here you can submit a string, with the caption of the image. This is not optional. 
        tags (List): Here we expect an array of strings. 
        file (UploadFile, optional): [description]. Defaults to File(...).
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Raises:
        HTTPException: Raises exceptions, if the image is corrupted, or does not have the correct file extensions. 

    Returns:
        Image: Instance of image database, which contains caption of image and the image_id, which is basically also the place where we saved it. 
    """

    ## Tag creation and check 

    # This checks, which tags already exist in the database and queries them
    existing_tags = session.query(Tag.tag).all()

    # This flattens the list of tuples into a list
    existing_tags = [list(x) for x in existing_tags]
    existing_tags = [item for sublist in existing_tags for item in sublist]

    # Since we did not yet define a class for this, we split by comma, this is DIRTY NEEDS TO BE BETTER!!!!!!
    tags = tags[0].split(",")

    # Exclude the tags that already exist
    non_existing_tags = [tag for tag in tags if tag not in existing_tags]

    # Write the tags that are not in the database, so that we get an id for them
    for tag in non_existing_tags:
        await create_tag(tag = tag,session = session)

    ## Image Validation

    # 1 cheapest validation as first method just checking extension
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png","JPEG","PNG")
    if not extension:
        raise HTTPException(status_code=415, detail="Only accepts jpg/jpeg and png. Maybe your file extension is not specified or erroneous.")
    
    # 2 more expensive image validation, first checking format, then trying to verify with pillow
    try:
        im = pil_image.open(fp = file.file)
        extension = im.format in ("JPEG", "JPEG 2000", "PNG")
        if not extension:
            raise HTTPException(status_code=415, detail="Only accepts jpg/jpeg and png. Your file seems to have the correct extension, but is in the wrong format, truncated, or corrupted.")

        #2a validation through verify method of pillow library
        im.verify() 
        im.close()

        # 2b verification through simple transpose method which would uncover truncated images
        im = pil_image.open(fp = file.file)
        im.transpose(method = PIL.Image.ROTATE_180)
    except:
        raise HTTPException(status_code=415, detail="Only accepts jpg/jpeg and png. Your file seems to have the correct extension, but is in the wrong format, truncated, or corrupted.")

    # create uuid, so that it can use it for filename
    uuid = str(uuid4().hex)
    
    # save pillow image object
    im.save(os.path.join("images", uuid+ ".jpeg"), "JPEG")
    # create database dictionary with the necessary information
    image_dict = {"image_id": uuid, "caption": caption }
    # create a new image instance
    db_image = Image(**image_dict)
    # register image in session
    session.add(db_image)
    # save changes in database
    session.commit()
    # reload image from database
    session.refresh(db_image)

    ## Create image_tags database
    # get the tag ids
    tag_ids = session.query(Tag.tag_id).filter(Tag.tag.in_(tags)).all()
    tag_ids = [r[0] for r in tag_ids]

    # write a image_tag instance
    for tag_id in tag_ids:
        await create_images_tags(tag_id = tag_id, image_id= uuid, session = session)

    return db_image

@router.get("", response_model=ReadImageList)
def list_images(session: Session = Depends(get_session)) -> List[Image]:
  """List all images in the database.

  Args:
      session (Session, optional): SQLAlchemy Session. Defaults to Depends(get_session).

  Returns:
      List[Image]: A list with database image instances.
  """
  return session.query(Image).all()
