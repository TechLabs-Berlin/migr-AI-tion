# import dependencies
from pydantic import BaseModel
from uuid import UUID


class CreateImage(BaseModel):
    """
    The view to create a new image.
    """
    caption: str
