# import dependencies
from sqlalchemy import BigInteger, Column, Integer, String

from database.database import Base

class Image(Base):
  __tablename__ = "images"

  id = Column(BigInteger().with_variant(Integer, "sqlite"), primary_key=True)
  name = Column(String)
  uri = Column(String)
  author = Column(String)