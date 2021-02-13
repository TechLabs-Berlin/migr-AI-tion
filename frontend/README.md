# Frontend set-up for Mac and Windows

After the backend is set and running a frontend set-up is needed to be able to load the app in the local host. [Create React App](https://github.com/facebook/create-react-app).

### 1: Installing required dependencies

Please open a new terminal in the project directory without closing the previous terminal for backend set-up.

#### For Mac
```bash
user@Users-MacBook-Pro migr-AI-tion % cd frontend
user@Users-MacBook-Pro frontend % npm install
```

#### For Windows
```bash
C:\Users\migr-AI-tion> cd frontend
C:\Users\migr-AI-tion\frontend> npm install
```

### 2: Available Scripts

Once all the dependencies are installed in the project directory, you can run:

#### For Mac
```bash
user@Users-MacBook-Pro frontend % npm start
```

#### For Windows
```bash
C:\Users\migr-AI-tion\frontend> npm start
```

##### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Frontend set-up
### Page
The MVP consist of 5 page. Which are:
1: Home Page
2: The Project
3: Gallery 
4: Team
5: Contact

### Features
The MVP consists of 4 main features. Which are:
#### 1: Data Visualisation
Once the page is loaded, a data visualisation in form of net should be visible. The user should be able to interact with the net and on hover it will show words representing tags of image available in the database. Whenever a user upload a new post (consisting of an image, a caption and tags) into the database, it will automatically be implemented to the net. So with a new tag input there will be a new branch on the net to be seen.

#### 2: Upload Function
User should be able to upload an image with format .png or .jpg, input tags and also caption and then upload them as a post into the backend system. The image can then be found in the Gallery page when user searches for a certain tag.

#### 3: Searchbar Function
User should be able to type any query into the search bar and when the 'enter' key or the magnifying glass icon is pressed, a result of images related to the query should appear. 

#### 4: Carousel Display
The result images will be presented in form of a sliding carousel. In the carousel, the information about the image uploaded will then be visible. The carousel consists of arrows to slide, a card box to contain the image information, and dots  as the indicator of page. The information provided in the carousel will be the image itself, the tags and caption inputed by the user, the tags results detected by the AI, and the confidence level of how high is the match level of the tags output by AI.

