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
