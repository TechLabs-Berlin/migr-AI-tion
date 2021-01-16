# import dependencies
from pydantic import BaseModel, validator
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

    @validator("id")
    def process_uuid_to_hex(cls, v):
        return v.hex

    class Config:
        orm_mode = True
