# import type hints
from typing import List
from sqlalchemy.orm import Session

# import dependencies
import os
from fastapi import APIRouter, Depends, HTTPException
from uuid import uuid4  # this is for creating image ids
from uuid import UUID
from database.database import get_session
from models.tags import Tag
from controllers.tags import TagController

# intialize new router
router = APIRouter()


# C = CREATE -> @router.post("")
# R = READ -> @router.get("/{id}")
# U = UPDATE -> @router.patch("/{id}")
# D = DELETE -> @router.delete("/{id}")
# L = LIST -> @router.get("")


@router.get("")
def list_tags(session: Session = Depends(get_session)) -> List[Tag]:
    """[summary]

    Args:
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Returns:
        List[Tag]: [description]
    """
    # initialize tag contoller
    tag_controller = TagController(session=session)
    return tag_controller.list()
