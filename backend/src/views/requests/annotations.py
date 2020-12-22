# import dependencies
from pydantic import BaseModel
from uuid import UUID

class CreateAnnotation(BaseModel):
  """
  The view to create a new annotation.
  """
  box: str
  tag : str
  number: int
  image_id: UUID