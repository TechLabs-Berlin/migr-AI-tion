# import dependencies
from sqlalchemy import String, Column

from uuid import uuid4

from database.types import UUID
from database.database import Base


class Tag(Base):
    __tablename__ = "tags"

    id = Column(UUID, primary_key=True, default=uuid4)
    tag = Column(String)
