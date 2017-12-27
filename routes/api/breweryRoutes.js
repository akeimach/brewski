const router = require("express").Router();
const axios = require("axios");
const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb(process.env.BREWERY_DB);


router.get("/:name", (req, res) => {
  console.log("In brewery router");
  brewdb.search.breweries({ q: req.params.name }, (request, result) => {
    console.log("Searching breweries for: " + req.params.name);
    for (let i in result) {
      console.log(result[i].name);
    }
  });
});



module.exports = router;