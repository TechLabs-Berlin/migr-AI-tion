# import dependencies
from sqlalchemy import BigInteger, String, Column, Integer

from uuid import uuid4

from database.database import Base

class Image(Base):
  __tablename__ = "images"

  image_id = Column(String(length = 32), primary_key=True,default = uuid4)
  caption = Column(String)

