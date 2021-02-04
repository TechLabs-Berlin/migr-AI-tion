# import dependencies
from pydantic import BaseModel, validator
from uuid import UUID
from typing import List

from views.responses.tags import ReadTag
from views.responses.tags import ReadAITag


class ReadImage(BaseModel):
    """
    The view of an annotation response.
    """
    id: UUID
    caption: str
    tags: List[ReadTag]
    ai_tags: List[ReadAITag]

    @validator("id")
    def process_uuid_to_hex(cls, v):
        return v.hex

    class Config:
        orm_mode = True
