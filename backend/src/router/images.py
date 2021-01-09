# import type hints
from typing import Dict, List
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
        title (str, required). Has to be a string object. 

        file (UploadFile, optional): Accepts file objects, Pillow is powerful, 
        so probably accepts a bunch of image types, but for now onlz jpg and png.

        session (Session, optional): Gets session object for database connection. Defaults to Depends(get_session).

    Returns:
        Image: Image database instance. 
                Saves image to ./images
    """

    existing_tags = session.query(Tag.tag).all()
    existing_tags = [list(x) for x in existing_tags]
    existing_tags = [item for sublist in existing_tags for item in sublist]
    tags = tags[0].split(",")
    non_existing_tags = [tag for tag in tags if tag not in existing_tags]


    for tag in non_existing_tags:
        await create_tag(tag = tag,session = session)

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


    # tag_ids = session.query(Tag.tag_id).filter(tag in tags)
    # print(tag_ids)


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
