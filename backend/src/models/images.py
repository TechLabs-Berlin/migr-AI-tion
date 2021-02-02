# import dependencies
from sqlalchemy import BigInteger, String, Column, Integer
from sqlalchemy.orm import relationship

from uuid import uuid4

from models.images_tags import ImageTag

from database.types import UUID
from database.database import Base


class Image(Base):
    # define sql table name
    __tablename__ = "images"

    # define fields
    id = Column(UUID, primary_key=True, default=uuid4)
    caption = Column(String)

    # define relationships
    tags = relationship("Tag", secondary=ImageTag.__table__)
    ai_tags = relationship("AITag")
