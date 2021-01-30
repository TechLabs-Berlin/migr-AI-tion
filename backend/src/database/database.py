# import type hints
from sqlalchemy.orm import Session

# import dependencies
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

Base = declarative_base()

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}, echo=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_session() -> Session:
  """[summary]

  Returns:
      Session: [description]
  """
  session = SessionLocal()
  try:
    yield session
  finally:
    session.close()