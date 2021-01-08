# import dependencies
from sqlalchemy import String, Column

from uuid import uuid4

from database.database import Base

class Tag(Base):
  __tablename__ = "tags"

  tag_id = Column(String(length = 36), primary_key=True,default = uuid4)
  tag = Column(String)

