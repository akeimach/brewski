# Brewski, the Beer Review App

### Group Members

Alyssa Keimach, Emery Cho, John Alexander Ferguson, Patrick Luu

### Purpose

Brewski is a web application that allows anyone to leave reviews of previously consumed craft beer.

### Deployed Website



### How to Use

First of all, users will create an account using either a Google account or an email address and password. Once logged in, the user will be able to leave beer reviews and give numerical ratings of each beer they drink. Once reviews have been submitted, users also have the option to edit and delete each of those reviews.

### How it works.

Users can choose the beer to review by using an image URL, uploading a local image file, or by taking a picture of it with a phone camera. Since the Google Cloud Vision API is used, the uploaded image will be compressed to 4MB before it gets used. Once this is done, users can begin reviewing the beer that has been uploaded. All user submitted content will be stored using MySQL.

### Things that were used.

* Express
* Sequelize
* Node js
* Request