# import type hints
from typing import Dict, List
from sqlalchemy.orm import Session

# import dependencies
import os
from fastapi import APIRouter, Depends, HTTPException
from uuid import uuid4 # this is for creating image ids
from uuid import UUID
from database.database import get_session
from models.images_tags import Image_tag

# intialize new router
router = APIRouter()

# C = CREATE -> @router.post("")
# R = READ -> @router.get("/{id}")
# U = UPDATE -> @router.patch("/{id}")
# D = DELETE -> @router.delete("/{id}")
# L = LIST -> @router.get("")

@router.post("")
async def create_images_tags(tag_id: UUID, image_id: UUID, session: Session = Depends(get_session)) -> Image_tag:
    """[summary]

    Args:
        tag_id (UUID): Provide the id of the tag that is matched to the image
        image_id (UUID): Provide the id of the image, that was just uploaded. 
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Returns:
        Image_tag: [description]
    """
    # make instance of Image_tag
    db_images_tags = Image_tag(tag_id = tag_id, image_id = image_id)
    # register image_tag in session
    session.add(db_images_tags)
    # save changes in database
    session.commit()
    # reload tag instance from database
    session.refresh(db_images_tags)
    return db_images_tags

@router.get("")
def list_images_tags(session: Session = Depends(get_session)) -> List[Image_tag]:
    """[summary]

    Args:
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Returns:
        List[Tag]: [description]
    """

    return session.query(Image_tag).all()

@router.get("/{tag_id}")
def list_images_tags(tag_id: str, session: Session = Depends(get_session)) -> List[Image_tag]:
    """[summary]

    Args:
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Returns:
        List[Tag]: [description]
    """

    return session.query(Image_tag.image_id).filter(Image_tag.tag_id == tag_id).distinct().all()
