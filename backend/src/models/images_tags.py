# import dependencies
from sqlalchemy import BigInteger, String, Column, Integer

from uuid import uuid4

from database.database import Base

class Image_tag(Base):
  __tablename__ = "images_tags"

  tag_id = Column(String(length = 32), primary_key=True,default = uuid4)
  id = Column(String(length = 32), primary_key=True,default = uuid4)