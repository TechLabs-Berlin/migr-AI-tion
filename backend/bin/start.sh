#!/usr/bin/env bash
source venv/bin/activate
pip install -r requirements.txt
cd src
uvicorn main:app --reload

