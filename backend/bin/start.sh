#!/usr/bin/env bash
source venv/bin/activate
cd src
uvicorn main:app --reload

