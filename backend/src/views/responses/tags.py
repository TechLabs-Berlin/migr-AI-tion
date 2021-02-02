# import dependencies
from pydantic import BaseModel
from uuid import UUID


class ReadTag(BaseModel):
    """
    The view of a tag response.
    """
    id: UUID
    tag: str

    class Config:
        orm_mode = True

class ReadAITag(BaseModel):
    """
    The view of a tag response.
    """
    image_id: UUID
    tag: str
    id: UUID
    confidence: str

    class Config:
        orm_mode = True