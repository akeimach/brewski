import axios from "axios";

// The getVision method retrieves label annotations from the server
// It accepts a base64 image or url to search the google vision api
export default {
  postVision: (imageData) => {
    return axios.post("/api/vision", imageData);
  },
  postBeerID: (imageResults) => {
    return axios.post("/api/identifybeer", imageResults);
  },
  postBreweryID: (nameOfBrewery) => {
    return axios.post("/api/identifybrewery", nameOfBrewery);
  },
  postUser: (googleToken) => {
    return axios.post("/api/user", googleToken)
  },
  postRateBeer: (visionBeerName) => {
    return axios.post("/api/ratebeer", visionBeerName);
  },
  getUser: (userId) => {
    return axios.get("/api/user/" + userId);
  },
  getHistory: (userId) => {
    return axios.get("/api/beers/" + userId);
  },
  getReviews: (userId) => {
    return axios.get("/api/reviews/" + userId);
  },
  postBeerReview: (beerReviewData) => {
    return axios.post("/api/reviews", beerReviewData);
  },
  updateBeerReview: (beerReviewData) => {
    return axios.put("/api/reviews", beerReviewData);
  },
  postUsersBeers: (userId, beerData) => {
    return axios.post("/api/beers/" + userId, beerData);
  }
};
