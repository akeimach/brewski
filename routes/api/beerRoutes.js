const router = require("express").Router();
const axios = require("axios");
const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb(process.env.BREWERY_DB);
const spelling = require("spelling");
const dict = new spelling(require("spelling/dictionaries/en_US"));


router.get("/:name", (req, res) => {
  console.log("In beer router");
  let arrayOfBeer = req.params.name.split(" ");
  for (let i = 0; i < arrayOfBeer.length; i++) {
    console.log(dict.lookup(arrayOfBeer[i]));
  }
  console.log(arrayOfBeer);

  brewdb.search.beers({ q: req.params.name }, (request, result) => {
    console.log("Searching beer names for: " + req.params.name);
    for (let i in result) {
      console.log(result[i].name);
    }
  });
});



module.exports = router;