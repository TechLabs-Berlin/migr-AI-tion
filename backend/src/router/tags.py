# import type hints
from typing import Dict, List
from sqlalchemy.orm import Session

# import dependencies
import os
from fastapi import APIRouter, Depends, HTTPException
from uuid import uuid4 # this is for creating image ids
from uuid import UUID
from database.database import get_session
from models.tags import Tag

# intialize new router
router = APIRouter()

# C = CREATE -> @router.post("")
# R = READ -> @router.get("/{id}")
# U = UPDATE -> @router.patch("/{id}")
# D = DELETE -> @router.delete("/{id}")
# L = LIST -> @router.get("")

@router.post("")
async def create_tag(tag: str, tag_id: UUID, session: Session = Depends(get_session)) -> Tag:
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

    # create a new image instance
    db_tags = Tag()
    # register image in session
    session.add(db_tags)
    # save changes in database
    session.commit()
    # reload image from database
    session.refresh(db_tags)
    return db_tags

