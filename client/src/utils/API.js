import axios from "axios";

export default {

  // Saves an article to the database
  saveBeer: function(beerData) {
    return axios.post("/api/saved", beerData);
  }

};
