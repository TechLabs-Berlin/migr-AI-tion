# import dependencies
from pydantic import BaseModel
from uuid import UUID
from typing import List

from views.responses.tags import ReadTag


class ReadImage(BaseModel):
    """
    The view of an annotation response.
    """
    id: UUID
    caption: str
    tags: List[ReadTag]

    class Config:
        orm_mode = True
