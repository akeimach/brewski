const router = require("express").Router();
const axios = require("axios");
const BreweryDb = require("brewerydb-node");
const spelling = require("spelling");
const dict = new spelling(require("spelling/dictionaries/en_US"));
const brewdb = new BreweryDb(process.env.BREWERY_DB);

router.post("/", (req, res) => {
  
  let spellCheckedName = "";
  let arrayOfBeer = req.body.imageResults[1].split(" ");
  arrayOfBeer.map(word => { // loop through array, spell checking each word
    if (dict.lookup(word).found) { // if the word is a real word
      spellCheckedName += word + " ";
    }
  });
  spellCheckedName = spellCheckedName.trim();
  let searchQuery = spellCheckedName + " " + req.body.imageResults[0];
  brewdb.search.all({ q: searchQuery }, (request, brewdbResult) => {
    console.log("Searching beer names for: " + searchQuery);
    if (brewdbResult) {
      let maxScore = 0;
      let currentScore = 0;
      let response = []; //initialize as an array
      response.push(brewdbResult[0]); //first index in array stores best guess
      brewdbResult.map(beerRes => {
        response.push(beerRes); //add all the results to the array
      });
      const goalArray = spellCheckedName.split(" ");
      brewdbResult.map(beerRes => {
        // DOES NOT WORK!!!
        if (beerRes.type === "beer") { //it is a beer not a brewery
          console.log(beerRes.type);

          currentScore = 0;
          const nameArray = beerRes.name.toUpperCase().trim().split(" ");
          nameArray.map(nameIndex => {
            if (goalArray.indexOf(nameIndex) !== -1) currentScore++;
          });
          if (currentScore > maxScore) {
            maxScore = currentScore;
            response[0] = beerRes;
          }
        }
      });
      res.json(response);
    }
  });
});

module.exports = router;