import axios from "axios";

// The getVision method retrieves label annotations from the server
// It accepts a base64 image or url to search the google vision api
export default {
  postVision: function(imageData) {
    return axios.post("/api/vision", imageData);
  },
  postRateBeer: function(beerData) {
    return axios.post("/api/ratebeer", beerData );
  },
  postBeerRate: function(data) {
  	return axios.post("/api/breweryDB", data);
  },
  getUser: function(userId) {
    return axios.get("api/user/" + userId);
  },
  getHistory: function(userId) {
    return axios.get("api/reviews/" + userId);
  }
};
