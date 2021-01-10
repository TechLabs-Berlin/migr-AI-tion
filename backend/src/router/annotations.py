# import type hints
from typing import Dict, List
from sqlalchemy.orm import Session

# import dependencies
from fastapi import APIRouter, Depends, File, UploadFile
from uuid import uuid4

from database.database import get_session
from models.annotations import Annotation
from views.responses.annotations import ReadAnnotation
from views.requests.annotations import CreateAnnotation

# intialize new router
router = APIRouter()


@router.post(path="", response_model=ReadAnnotation)
def create_annotation(annotation: CreateAnnotation, session: Session = Depends(get_session)) -> ReadAnnotation:
  """Creating a new annotation.

  Args:
      annotation (CreateAnnotation): An annotation instance of type CreateAnnotation including bounding box, type, and image id.
      session (Session, optional): SQLAlchemy Session. Defaults to Depends(get_session).

  Returns:
      ReadAnnotation: An annotation instance of type ReadAnnotation.
  """
  db_annotation = Annotation(**annotation.dict())
  session.add(db_annotation)
  session.commit()
  session.refresh(db_annotation)
  return db_annotation