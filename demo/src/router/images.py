# import type hints
from sqlalchemy.orm import Session

# import dependencies
from fastapi import APIRouter, Depends

from database.database import get_session
from models.images import Image

# intialize new router
router = APIRouter()

# C = CREATE -> @router.post("")
# R = READ -> @router.get("/{id}")
# U = UPDATE -> @router.patch("/{id}")
# D = DELETE -> @router.delete("/{id}")
# L = LIST -> @router.get("")

@router.get("")
def list_images(session: Session = Depends(get_session)):
  return session.query(Image).all()

@router.get("/{id_}")
def read_image(id_: int, session: Session = Depends(get_session)):
  return session.query(Image).filter(Image.id == id_).first()