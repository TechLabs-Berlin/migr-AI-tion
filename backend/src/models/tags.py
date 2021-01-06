# import dependencies
from sqlalchemy import BigInteger, String, Column, Integer

from uuid import uuid4

from database.database import Base

class Tag(Base):
  __tablename__ = "tags"

  tag_id = Column(String(length = 32), primary_key=True,default = uuid4)
  tag = Column(String)

