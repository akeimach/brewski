import axios from "axios";

// The getVision method retrieves label annotations from the server
// It accepts a base64 image or url to search the google vision api
export default {
  postVision: function(imageData) {
    return axios.post("/api/vision", imageData);
  },
  getBeerID: function(imageResults) {
    return axios.get("/api/identifybeer/" + imageResults);
  },
  getUser: function(userId) {
    return axios.get("/api/user/" + userId);
  },
  getHistory: function(userId) {
    return axios.get("/api/reviews/" + userId);
  },
  getBeerInformation: function(beerName) {
    return axios.get("/api/beerInfo/" + beerName);
  }
};
