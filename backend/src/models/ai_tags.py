# import dependencies
from sqlalchemy import String, Column, ForeignKey

from uuid import uuid4

from database.types import UUID
from database.database import Base


class AITag(Base):
    __tablename__ = "ai_tags"

    image_id = Column(UUID, ForeignKey("images.id"), default=uuid4)
    id = Column(UUID, primary_key=True, default = uuid4)
    tag = Column(String)
    confidence = Column(String)
