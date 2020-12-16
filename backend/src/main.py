
# import type hintes
from typing import Dict


# import dependencies
from fastapi import FastAPI

from database.database import engine
from database.base import Base
from router import images

# create migrations
Base.metadata.create_all(bind=engine)


# initialize application
app = FastAPI()

app.include_router(router = images.router, prefix = "/images")