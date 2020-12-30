# import dependencies
from sqlalchemy import BigInteger, String, Column, Integer, ForeignKey
from uuid import uuid4

from database.types import UUID
from database.database import Base

class Annotation(Base):
  __tablename__ = "annotations"

  id = Column(UUID, primary_key=True, default=uuid4)
  box = Column(String(length=255))
  tag = Column(String(length=255))
  image_id = Column(UUID, ForeignKey(column="images.id"))