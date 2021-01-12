# import dependencies
from sqlalchemy import Column, ForeignKey

from uuid import uuid4

from database.types import UUID
from database.database import Base


class ImageTag(Base):
    __tablename__ = "images_tags"

    tag_id = Column(UUID, ForeignKey("tags.id"), primary_key=True, default=uuid4)
    image_id = Column(UUID, ForeignKey("images.id"), primary_key=True, default=uuid4)
