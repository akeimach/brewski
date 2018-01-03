# Brewski, the Beer Review App

### Group Members

Alyssa Keimach, Emery Cho, John Alexander Ferguson, Patrick Luu

### Purpose

Brewski is a web application that allows anyone to leave reviews of previously consumed craft beer.

### Deployed Website

https://brewski-beer-review.herokuapp.com/

### How to Use

First of all, users will click Login to create an account using either a Google account or an email address and password. Once logged in, the user will upload the image of a beer they drink. Users can then go to the History page and leave beer reviews and ratings for each uploaded beer. Once reviews have been submitted, users have the option to edit and delete each of those reviews.

### How it works.

Users upload the image of the beer by using an image URL, uploading a local image file, or by taking a picture of it with a phone camera. Since the Google Cloud Vision API is used, the uploaded image will be sized down to 4MB before it gets used on the app. Once this is done, users can begin reviewing the beer that has been uploaded. All user submitted content will be stored using MySQL.

### Screenshots



### Dependencies Used

axios, body-parser, brewerydb-node, dotenv, express, isomorphic-fetch, method-override, mysql2, node-cloud-vision-api, path, react-router-dom, request, sequelize, sequlize-cli, spelling, react, react-bootstrap, react-dom, react-file-reader, react-google-login-component, react-modal, react-modal-login, react-responsive-modal, react-scripts

### Libraries Used

Bootstrap, jQuery, Popper.js, React.js