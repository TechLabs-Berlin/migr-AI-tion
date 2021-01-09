# import dependencies
from pydantic import BaseModel
from uuid import UUID
from typing import List

class ReadImage(BaseModel):
  """
  The view of an annotation response.
  """
  image_id: UUID
  caption: str
  
  class Config:
    orm_mode = True


class ReadImageList(BaseModel):
  __root__: List[ReadImage]