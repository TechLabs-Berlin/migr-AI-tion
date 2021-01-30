# migr-AI-tion

This project aims to give a voice to migrants in shaping how AI is used. All of the code will be open source.   # Read Me Template

---

## Table of Contents
You're sections headers will be used to reference location of destination.

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [Author Info](#author-info)

---

## Description

Creating ReadMe's for your Github repository can be tedious.  I hope this template can save you time and effort as well as provide you with some consistency across your projects.

### Technologies

- Technology 1
- Technology 2

[Back To The Top](#read-me-template)

---

## How To Use

### Installation

### Pull files from GitHub
Create a new folder "migr-AI-tion" for this project on your computer.
Than open the GitBash with the right click on the folder sign and use following commands to pull the files from GitHub. *Also pull before you start working on files, which you work on together with others. So you use the latest version of the files.*

```bash
git clone
```
```bash
git status
```
```bash
git checkout main
```
```
git pull
```
### Push changes to GitHub
First create a new branch, so you don't push to the main branch. Than switch to the branch and commit your changes.
```bash
git branch <branchname>
```
```bash
git checkout <branchname>
```
```bash
git status
```
```bash
git add .
```
```bash
git commit -m "<message/changes>"
```
```bash
git push
```
```bash
git status
```

### Setting up infrastructure for Mac

#### 1: Setting up virtual environment 
You require an up-to-date Python 3 version as well as `pip`. 
```bash
user@Users-MacBook-Pro migr-AI-tion % python3 -m venv venv
user@Users-MacBook-Pro migr-AI-tion % source venv/bin/activate
```


#### 2: Installing requirements
Please note the 'venv' addition to your terminal to ensure that you successfully set-up the virtual environment. 
```bash
(venv) user@Users-MacBook-Pro migr-AI-tion % cd backend
(venv) user@Users-MacBook-Pro backend % pip install -r requirements.txt
```


#### 3: Starting FastAPI app
The uvicorn command starts the ASGI app which is located in the src folder. 
```bash
(venv) user@Users-MacBook-Pro backend % cd src
(venv) user@Users-MacBook-Pro src % uvicorn main:app --reload
```
If you encounter the following error, you have to create a new folder in the backend called /images. 
```bash
RuntimeError: Directory 'images' does not exist
```
For that you have to quit the app by pressing `CTRL+C` and create the directory 'images'. 
```bash
(venv) user@Users-MacBook-Pro src % mkdir images
(venv) user@Users-MacBook-Pro src % uvicorn main:app --reload
```

#### 4: Interacting with the app 
If successfully installed, you should see the following output in the terminal: 
```bash
INFO:     Uvicorn running on http://127.0.0.1:8000 
```
And depending with your local set-up you can interact with the API on the above seen IP. For example appending /docs will allow you to test your created endpoints. For further information, see the documentation of [FastAPI](https://fastapi.tiangolo.com/). 

### Setting up infrastructure for Windows

#### 1: Setting up virtual environment 
You require an up-to-date Python 3 version as well as `pip`. 
```bash
C:\Users\migr-AI-tion>python -m venv venv
C:\Users\migr-AI-tion>venv\Scripts\Activate.ps1
```

#### 2: Installing requirements
Please note the 'venv' addition to your terminal to ensure that you successfully set-up the virtual environment. 
```bash
(venv) C:\Users\migr-AI-tion>cd backend
(venv) C:\Users\migr-AI-tion\backend>pip install -r requirements.txt
```

#### 3: Starting FastAPI app
The uvicorn command starts the ASGI app which is located in the src folder. 
```bash
(venv) C:\Users\migr-AI-tion\backend>cd src
(venv) C:\Users\migr-AI-tion\backend\src>uvicorn main:app --reload
```
If you encounter the following error, you have to create a new folder in the backend called /images. 
```bash
RuntimeError: Directory 'images' does not exist
```
For that you have to quit the app by pressing `CTRL+C` and create the directory 'images'. 
```bash
(venv) C:\Users\migr-AI-tion\backend\src>mkdir images
(venv) C:\Users\migr-AI-tion\backend\src>uvicorn main:app --reload
```

#### 4: Interacting with the app 
If successfully installed, you should see the following output in the terminal: 
```bash
INFO:     Uvicorn running on http://127.0.0.1:8000 
```
And depending with your local set-up you can interact with the API on the above seen IP. For example appending /docs will allow you to test your created endpoints. For further information, see the documentation of [FastAPI](https://fastapi.tiangolo.com/).

### Frontend set-up
(general text regarding frontend)
For further information have a look at
[Frontend README](#frontend/README.md)




### Backend set-up
###FastAPI
Two endpoints in total, one for images and one for tags:
1: "images endpoint" includes a 'post-method' and a 'get-method'
The 'post-method' reads the image and validates if the image consists of an acceptable file ("jpg", "jpeg", "png", "JPEG", "PNG") and, if validated, saves the image, its caption as well as its newly created unique id in the data table "images". This method also validates if the inserted tags already exist in the table "tags" and, if they are new, adds them to this data table. Also, the unique ids of the image and the tag(s) are saved in "images_tags".
The 'get-method' retrieves a list of all images and their respective tags in the database "images"
2: "tags endpoint" includes a 'get-method'
The 'get-method' retrieves a list of all tags in the database "tags".

###Tables
Three tables in total, currently using SQLite but will/might change to PostgreSQL
1: "images" including 'id' and 'caption'
2: "tags" including 'id' and 'tag'
3: "images_tags" including 'tag_id' and 'image_id'


###AWS Deployment
(no details here yet, still has to be done)
For further information have a look at






[Back To The Top](#read-me-template)

---

## References
[Back To The Top](#read-me-template)

---

## Author Info

- 

[Back To The Top](#read-me-template)