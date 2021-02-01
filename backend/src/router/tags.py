# import type hints
from typing import List
from sqlalchemy.orm import Session, aliased
from sqlalchemy import func

# import dependencies
import os
import json
from fastapi import APIRouter, Depends, HTTPException
from uuid import uuid4  # this is for creating image ids
from uuid import UUID
from database.database import get_session
from models.tags import Tag
from models.images_tags import ImageTag
from controllers.tags import TagController
from views.responses.tags import node, link, ReadNetwork



# intialize new router
router = APIRouter()


# C = CREATE -> @router.post("")
# R = READ -> @router.get("/{id}")
# U = UPDATE -> @router.patch("/{id}")
# D = DELETE -> @router.delete("/{id}")
# L = LIST -> @router.get("")

@router.get("")
def list_tags(counts: bool = False, session: Session = Depends(get_session)) -> List[Tag]:
    """[summary]

    Args:
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Returns:
        List[Tag]: [description]
    """
    # initialize tag contoller
    tag_controller = TagController(session=session)
    return tag_controller.list()


@router.get("/network", response_model=ReadNetwork)
def get_network(session: Session = Depends(get_session)) -> ReadNetwork :
    """[summary]

    Args:
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Returns:
        List[Tag]: [description]
    """

    nodes = session.query(ImageTag.tag_id.label("id"), func.count(ImageTag.tag_id).label("value"), Tag.tag.label("name")).group_by(ImageTag.tag_id).join(Tag).all()
    
    a = aliased(ImageTag)
    b = aliased(ImageTag)
    links = session.query(a.tag_id.label("source"), b.tag_id.label("target"), func.count('*').label("value")).join(b, b.image_id==a.image_id).filter(a.tag_id > b.tag_id).group_by(a.tag_id, b.tag_id).all()


    return {"links": links, "nodes": nodes}

