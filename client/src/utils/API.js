import axios from "axios";

// The getVision method retrieves label annotations from the server
// It accepts a base64 image or url to search the google vision api
export default {
  postVision: function(imageData) {
    return axios.post("/api/vision", imageData);
  },
  postBeerID: function(imageResults) {
    return axios.post("/api/identifybeer", imageResults);
  },
  postBreweryID: function(nameOfBrewery) {
    return axios.post("/api/identifybrewery", nameOfBrewery);
  },
  postRateBeer: function(beerName) {
    return axios.post("/api/ratebeer", beerName);
  },
  getUser: function(userId) {
    return axios.get("/api/user/" + userId);
  },
  getHistory: function(userId) {
    return axios.get("/api/reviews/" + userId);
  },
  postReview: function(userReview) {
    return axios.post("/api/postReview", userReview);

  }
};
