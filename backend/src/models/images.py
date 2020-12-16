# import dependencies
from sqlalchemy import BigInteger, Column, String
from database.database import Base

class Image(Base):
  __tablename__ = "images"

  id = Column(BigInteger, primary_key=True)
  name = Column(String)
  uri = Column(String)
  author = Column(String)