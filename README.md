## Sunrise Photo Finder

## Intro
Sunrise Photo Finder is an application that allows you to select your favourite sunrise photos from a collection of 20 images. You can add and remove photos from your favourites. You can also choose to view all photos, or view favourites only.

This application was built with React, Webpack, Babel and Bulma. You can run this project locally by following the installation and setup instructions below.

I chose to use React as its component-based layout makes dealing with the logic for each part of an app really clear. It's also efficient as React will detect when data has changed but will only render the individual components that have changed, rather than the whole application. I've chosen to use more modern features, such as ES6 arrow functions and 'classes', rather than focus on catering for older browsers. 

I've used Webpack to bundle my files into a single bundle.js file for the browser to access. I've also used Babel to translate JSX used in React to JavaScript so the browser can understand it.

In terms of CSS, I decided to use Bulma, a CSS framework based on Flexbox. It's a mobile-first framework so it makes responsive design a breeze to implement. It's also got great documentation which makes it easy to get stuck in and try out new features.

## Challenges
To get the project up and running, I initially used 'create-react-app' as it comes with Webpack and Babel nicely preconfigured. However, I had some challenges getting access to the data from the Flickr API within my React components when using this setup. 

Although frustrating, I decided to continue using hard-coded data instead in order to build out the app. I didn't have much time as I'd been determined to fix the data issue but I focused on building the app and then went back to look at the data problem. 

Ultimately, I found that there seemed to be an issue with the bundle.js created by create-react-app and so I re-built the project with a manual implementation of Webpack and Babel instead. This did fix the issue and allowed the app to access data from the Flickr API.

It's been a rollercoaster but I've had fun with it!

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
Once webpack has finished compiling, open a window in your browser and enter the following URL to view the project: http://localhost:9000

