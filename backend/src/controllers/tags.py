# import type hints
from sqlalchemy.orm import Session

# import dependencies
from models.tags import Tag


class TagController:

    def __init__(self, session: Session):
        self._session = session
        self._tag = None

    def create(self, tag: str):
        # create tag instance
        self._tag = Tag(tag=tag)
        # save instance to database
        self._session.add(self._tag)
        self._session.commit()
        self._session.refresh(self._tag)

    def list(self):
        return self._session.query(Tag).all()

    @property
    def tag(self) -> Tag:
        return self._tag
