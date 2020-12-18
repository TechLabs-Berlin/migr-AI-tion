# import type hints
from typing import Dict, List
from sqlalchemy.orm import Session

# import dependencies
from fastapi import APIRouter, Depends,File, UploadFile

from uuid import uuid4

from PIL import Image as pil_image
from io import BytesIO

from database.database import get_session
from models.images import Image

# intialize new router
router = APIRouter()

# C = CREATE -> @router.post("")
# R = READ -> @router.get("/{id}")
# U = UPDATE -> @router.patch("/{id}")
# D = DELETE -> @router.delete("/{id}")
# L = LIST -> @router.get("")

# @router.post("")
# def create_image(image: Dict, session: Session = Depends(get_session)) -> Image:
#   """Create a new image.

#   Args:
#       image (Dict): Image dictionary including name, uri and author.
#       session (Session, optional): SQLAlchemy Session. Defaults to Depends(get_session).

#   Returns:
#       Image: A database image instance.
#   """
#   # create a new image instance
#   db_image = Image(**image)
#   # register image in session
#   session.add(db_image)
#   # save changes in database
#   session.commit()
#   # reload image from database
#   session.refresh(db_image)
#   return db_image

@router.post("")
async def create_image(file: UploadFile = File(...), session: Session = Depends(get_session)) -> Image:
    """[summary]

    Args:
        file (UploadFile, optional): [description]. Defaults to File(...).
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Returns:
        Image: [description]
    """
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return "Image must be jpg or png format!"
    uuid = str(uuid4().hex)
    im = pil_image.open(file.file)
    im.save("./images/"+uuid, "JPEG")
    image_dict = {"id": uuid, "name": file.filename, "uri":"./images/"+uuid }
    # create a new image instance
    db_image = Image(**image_dict)
    # register image in session
    session.add(db_image)
    # save changes in database
    session.commit()
    # reload image from database
    session.refresh(db_image)
    return db_image




@router.get("")
def list_images(session: Session = Depends(get_session)) -> List[Image]:
  """List all images in the database.

  Args:
      session (Session, optional): SQLAlchemy Session. Defaults to Depends(get_session).

  Returns:
      List[Image]: A list with database image instances.
  """
  return session.query(Image).all()

@router.get("/{id_}")
def read_image(id_: int, session: Session = Depends(get_session)) -> Image:
  """[summary]

  Args:
      id_ (int): The id of the image to return.
      session (Session, optional): SQLAlchemy Session. Defaults to Depends(get_session).

  Returns:
      Image: A database image instance.
  """
  return session.query(Image).filter(Image.id == id_).first()

@router.delete("/{id_}")
def delete_image(id_: int, session: Session = Depends(get_session)) -> None:
  """[summary]

  Args:
      id_ (int): The id of the image to delete.
      session (Session, optional): SQLAlchemy Session. Defaults to Depends(get_session).

  Returns:
      None
  """
  # delete image
  session.query(Image).filter(Image.id == id_).delete()
  # save changes in database
  session.commit()
  return None