## Sunrise Photo Finder

## Intro
Sunrise Photo Finder is an application that allows you to select your favourite sunrise photos from a collection of 20 images. You can add and remove photos from your favourites. You can also choose to view all photos, or view favourites only.

This application was built with React and Bulma. You can run this project locally by following the installation and setup instructions below.

I chose to use React as its component-based layout makes dealing with the logic for each part of an app really clear. It's also efficient as React will detect when data has changed but will only render the individual components that have changed, rather than the whole application. I've chosen to use more modern features, such as ES6 arrow functions and 'classes', rather than cater for older browsers. 

To get the project up and running, I used 'create-react-app' as it comes with Webpack and Babel nicely preconfigured which allowed me to get started laying out components quickly.

I've also used Bulma, a CSS framework based on Flexbox. It's a mobile-first framework so it makes responsive design a breeze to implement. It's also got great documentation which makes it easy to get stuck in and try out new features.

## Challenges
I did have a challenge getting access to the data from the Flickr API within my React component. I could access the data in the HTML file with no problem using the callback function but I wanted to deal with the data in React in order to build out the app using React components. I tried passing the reference to the JSON data to the React component as a prop and also defining the src script within the React component but didn't have any luck. I also used various npm packages, such as 'jsonp' and 'fetch-jsonp' to gain access to the JSON data within the callback but these also did not work. Although frustrating, I decided to continue using hard-coded data instead in order to build out the app. I didn't have much time as I'd been determined to fix the data issue but I instead became determined to build out a fully functional Photo Finder app which could then be modified to fetch data from the Flickr API at a later date. It's been a rollercoaster but I've had fun with it!

If I had more time, I'd like to have added a test suite to the project.


## Installation

1. Make sure you have node installed. You'll need at least version 6 for this project to run.
``` javascript 
node -v
```
This command will tell you the version of node you have, if you have it installed already. If you do not have node installed, or you have an older version, follow the installation instructions found here: https://nodejs.org/en/download/package-manager/.

## Project setup

1. To clone the project and install dependencies, open a terminal and navigate to the folder where you wish to save the project. Run the following command:
``` javascript 
git clone https://github.com/Gemmawv/sunrise-photo-app
```

2. To install all project dependencies, navigate into the new folder and run:
``` javascript 
npm install
```

3. Finally, open another terminal, navigate into the project folder and run:
``` javascript 
npm start
```
Once webpack has finished compiling, the application will open at http://localhost:3000

