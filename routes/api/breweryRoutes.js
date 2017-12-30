const router = require("express").Router();
const axios = require("axios");
const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb(process.env.BREWERY_DB);


router.post("/", (req, res) => {
  
  console.log("In brewery router");
  brewdb.search.breweries({ q: req.body.nameOfBrewery }, (request, brewdbResult) => {
    console.log("Searching breweries for: " + req.body.nameOfBrewery);
    if (brewdbResult) {
      const response = brewdbResult[0];
      res.json(response);
    }
  });
});


module.exports = router;