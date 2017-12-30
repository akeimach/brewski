const router = require("express").Router();
const axios = require("axios");
const BreweryDb = require('brewerydb-node');
const spelling = require("spelling");
const dict = new spelling(require("spelling/dictionaries/en_US"));
const brewdb = new BreweryDb(process.env.BREWERY_DB);


router.post("/", (req, res) => {
  
  console.log("In beer router");
  let spellCheckedName = "";
  let arrayOfBeer = req.body.imageResults[1].split(" ");
  for (let i = 0; i < arrayOfBeer.length; i++) {
    const lookupRes = dict.lookup(arrayOfBeer[i]); // is rank useful?
    if (lookupRes.found) { // if the word is a real word
      spellCheckedName += arrayOfBeer[i] + " ";
    }
  }
  spellCheckedName = spellCheckedName.trim();
  let searchQuery = spellCheckedName + " " + req.body.imageResults[0];
  brewdb.search.all({ q: searchQuery }, (request, brewdbResult) => {
    console.log("Searching beer names for: " + searchQuery);
    if (brewdbResult) {
      let maxScore = 0;
      let currentScore = 0;
      let response = brewdbResult[0];
      const goalArray = spellCheckedName.split(" ");
      for (let key in brewdbResult) {
        if (brewdbResult[key].abv) { //it is a beer not a brewery
          currentScore = 0;
          const nameArray = brewdbResult[key].name.toUpperCase().trim().split(" ");
          for (let i = 0; i < nameArray.length; i++) {
            if (goalArray.indexOf(nameArray[i]) !== -1) currentScore++;
          }
          if (currentScore > maxScore) {
            maxScore = currentScore;
            response = brewdbResult[key];
          }
        }
      }
      res.json(response);
    }
  });
});


module.exports = router;