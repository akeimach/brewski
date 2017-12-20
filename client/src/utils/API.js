import axios from "axios";


export default {

  // Saves an article to the database
  searchBeerImage: function(imageData) {
    console.log("API.js: searchBeerImage: ");
    console.log(imageData);
    return axios.get("/api/vision", imageData);
  }

};
