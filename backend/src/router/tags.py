# import type hints
from typing import List
from sqlalchemy.orm import Session

# import dependencies
import os
import json
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


@router.get("/network")
def get_network(session: Session = Depends(get_session)) :
    """[summary]

    Args:
        session (Session, optional): [description]. Defaults to Depends(get_session).

    Returns:
        List[Tag]: [description]
    """

    result = session.execute('SELECT a.tag_id "source", b.tag_id "target", COUNT(*) "value" FROM images_tags a	JOIN images_tags b ON b.image_id = a.image_id	AND b.tag_id > a.tag_id	GROUP BY a.tag_id,		b.tag_id')
    links = []
    for row in result:
        links.append(row)
    result = session.execute('SELECT ALL images_tags.tag_id id,t.tag "name",COUNT(*) "value" FROM images_tags LEFT JOIN tags t ON images_tags.tag_id=t.id GROUP BY images_tags.tag_id')
    nodes = []
    for row in result:
        nodes.append(row)
    return {"nodes": nodes, "links": links}

