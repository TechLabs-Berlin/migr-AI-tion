# import dependencies
from pydantic import BaseModel,validator
from uuid import UUID
from typing import List


class ReadTag(BaseModel):
    """
    The view of a tag response.
    """
    id: UUID
    tag: str

    class Config:
        orm_mode = True


class node(BaseModel):
    id: UUID
    name: str
    value: float

    @validator("id")
    def process_uuid_to_hex(cls, v):
        return v.hex

    class Config:
        orm_mode = True


class link(BaseModel):
    source: UUID
    target: UUID
    value: float

    @validator("source", "target")
    def process_uuid_to_hex(cls, v):
        return v.hex

    class Config:
        orm_mode = True

class ReadNetwork(BaseModel):
    """
    The view of an annotation response.
    """
    nodes: List[node]
    links: List[link]

    class Config:
        orm_mode = True
