# import dependencies
from pydantic import BaseModel
from uuid import UUID

class ReadAnnotation(BaseModel):
  """
  The view of a annotation response.
  """
  id: UUID
  box: str
  tag : str
  image_id: UUID
  
  class Config:
    orm_mode = True