import axios from "axios";

// The getVision method retrieves label annotations from the server
// It accepts a base64 image or url to search the google vision api
export default {
  postVision: function(imageData) {
    return axios.post("/api/vision", imageData);
  },
  getBeerID: function(nameOfBeer) {
    return axios.get("/api/identifybeer/" + nameOfBeer);
  },
  getBreweryID: function(nameOfBrewery) {
    return axios.get("/api/identifybrewery/" + nameOfBrewery);
  },
  getUser: function(userId) {
    return axios.get("/api/user/" + userId);
  },
  getHistory: function(userId) {
    return axios.get("/api/reviews/" + userId);
  }
};
