# import type hints
from typing import List
from sqlalchemy.orm import Session

# import dependencies
import os
from fastapi import APIRouter, Depends, File, Form, UploadFile, HTTPException
from uuid import uuid4  # this is for creating image ids
import PIL
from PIL import Image as pil_image  # this is to read and save images

from database.database import get_session
from models.images import Image
from models.tags import Tag
from models.ai_tags import AITag
from models.images_tags import ImageTag

from controllers.tags import TagController
from views.responses.images import ReadImage
from tf_model.tf import predict, load_model


# initialize new router
router = APIRouter()


# C = CREATE -> @router.post("")
# R = READ -> @router.get("/{id}")
# U = UPDATE -> @router.patch("/{id}")
# D = DELETE -> @router.delete("/{id}")
# L = LIST -> @router.get("")

@router.post("", response_model=ReadImage)
def create_image(caption: str = Form(...), tags: str = Form(...), file: UploadFile = File(...),
                 session: Session = Depends(get_session)) -> Image:

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

    # initialize new tag controller
    tag_controller = TagController(session=session)

    # This checks, which tags already exist in the database and queries them
    existing_tags = tag_controller.list()

    # This flattens the list of tuples into a list
    existing_tags = [tag.tag for tag in existing_tags]

    # Since we did not yet define a class for this, we split by comma, this is DIRTY NEEDS TO BE BETTER!!!!!!
    tags = [tag.strip() for tag in tags.split(",")]

    # Exclude the tags that already exist
    non_existing_tags = [tag for tag in tags if tag not in existing_tags]

    # Write the tags that are not in the database, so that we get an id for them
    for tag in non_existing_tags:
        tag_controller.create(tag=tag)

    ## Image Validation

    # 1 cheapest validation as first method just checking extension
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png", "JPEG", "PNG")
    if not extension:
        raise HTTPException(status_code=415,
                            detail="Only accepts jpg/jpeg and png. Maybe your file extension is not specified or erroneous.")

    # 2 more expensive image validation, first checking format, then trying to verify with pillow
    try:
        im = pil_image.open(fp=file.file)
        im = im.convert('RGB')

        extension = im.format in ("JPEG", "JPEG 2000", "PNG", None)

        if not extension:
            raise HTTPException(status_code=415,
                                detail="Only accepts jpg/jpeg and png. Your file seems to have the correct extension, but is in the wrong format, truncated, or corrupted1.")

        # 2a validation through verify method of pillow library
        im.verify()
        im.close()

        # 2b verification through simple transpose method which would uncover truncated images
        im = pil_image.open(fp=file.file)
        im = im.convert('RGB')
        im.transpose(method=PIL.Image.ROTATE_180)
    except:
        raise HTTPException(status_code=415,
                            detail="Only accepts jpg/jpeg and png. Your file seems to have the correct extension, but is in the wrong format, truncated, or corrupted2.")

    # create uuid, so that it can use it for filename
    uuid = str(uuid4().hex)

    # save pillow image object
    im.save(os.path.join("images", uuid + ".jpeg"), "JPEG")
    # create a new image instance
    db_image = Image(id=uuid, caption=caption)
    # register image in session
    session.add(db_image)
    # save changes in database
    session.commit()
    # reload image from database
    session.refresh(db_image)

    ## Create image_tags database
    # get the tag ids
    tags = session.query(Tag).filter(Tag.tag.in_(tags)).all()

    # write a image_tag instance
    for tag in tags:
        # register image_tag in session
        session.add(ImageTag(tag_id=tag.id, image_id=db_image.id))
    # save changes in database


    # write ai_tags instance
    prediction = predict(im)
    for dic in prediction:
        dic['image_id'] = uuid
        dic['tag'] = dic['class']
        del dic['class']
        print(dic)
        session.add(AITag(**dic))

    session.commit()
    return db_image

@router.get("", response_model=List[ReadImage])
def list_images(tag: str = None, session: Session = Depends(get_session)) -> List[Image]:
    """List all images in the database.

    Args:
        session (Session, optional): SQLAlchemy Session. Defaults to Depends(get_session).

    Returns:
        List[Image]: A list with database image instances.
    """


    if tag is None:
        return session.query(Image).all()
    else:
        # subquery = session.query(Tag.id).filter(Tag.tag.like(f"%{tag}%")).subquery()
        # subquery = session.query(ImageTag.image_id).filter(ImageTag.tag_id.in_(subquery))
        # return session.query(Image).filter(Image.id.in_(subquery)).all()

        return session.query(Image).filter(Image.tags.any(Tag.tag.like(f"%{tag}%"))).all()
 
