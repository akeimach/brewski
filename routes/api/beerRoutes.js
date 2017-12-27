const router = require("express").Router();
const axios = require("axios");
const BreweryDb = require('brewerydb-node');
const spelling = require("spelling");
const dict = new spelling(require("spelling/dictionaries/en_US"));
const brewdb = new BreweryDb(process.env.BREWERY_DB);


router.post("/", (req, res) => {
  
  console.log("In beer router");
  let name = "";
  let arrayOfBeer = req.body.nameOfBeer.split(" ");
  for (let i = 0; i < arrayOfBeer.length; i++) {
    const lookupRes = dict.lookup(arrayOfBeer[i]); // is rank useful?
    if (lookupRes.found) { // if the word is a real word
      name += arrayOfBeer[i] + " ";
    }
  }
  brewdb.search.beers({ q: name }, (request, brewdbResult) => {
    console.log("Searching beer names for: " + name);
    if (brewdbResult) {
      const response = brewdbResult[0];
      res.json(response);
    }
  });
});


module.exports = router;