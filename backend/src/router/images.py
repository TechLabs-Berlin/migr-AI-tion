# import type hints
from typing import Dict, List
from sqlalchemy.orm import Session

# import dependencies
import os
from fastapi import APIRouter, Depends, File, UploadFile
from fastapi.responses import FileResponse
from uuid import uuid4 # this is for creating image ids
from PIL import Image as pil_image # this is to read and save images

from database.database import get_session
from models.images import Image

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
async def create_image(file: UploadFile = File(...),  session: Session = Depends(get_session)) -> Image:
    """[summary]

    Args:
        file (UploadFile, optional): [description]. Accepts file objects, Pillow is powerful, 
        so probably accepts a bunch of image types, but for now onlz jpg and png

        session (Session, optional): Gets session object for database connection. Defaults to Depends(get_session).

    Returns:
        Image: Image database instance. 
                Saves image to ./images
    """
    # check if it is jpeg or other format we like
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return "Image must be jpg or png format!"
    # create uuid, so that it can use it for filename
    uuid = str(uuid4().hex)
    # open the image and make pillow-image object
    im = pil_image.open(fp=file.file)
    # save pillow image object
    im.save(os.path.join("images", uuid+ ".jpeg"), "JPEG")
    # create database dictionary with the necessary information
    image_dict = {"id": uuid, "title": "test"}
    # create a new image instance
    db_image = Image(**image_dict)
    # register image in session
    session.add(db_image)
    # save changes in database
    session.commit()
    # reload image from database
    session.refresh(db_image)
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
