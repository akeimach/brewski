const router = require("express").Router();
const request = require("request");

// Matches with "/api/ratebeer"
router.post("/", (req, res) => {

  const headers = {
    "content-type": "application/json",
    "accept": "application/json",
    "x-api-key": process.env.RATE_BEER
  };

  let dataString = {
    query: 'query { beerSearch(query: "' + req.body.beerName + '") { items { id name }}}'
  };

  let options = {
    url: "https://api.r8.beer/v1/api/graphql/",
    method: "POST",
    headers: headers,
    body: JSON.stringify(dataString)
  };

  request(options, (req1, res1) => {
    const beerID = JSON.parse(res1.body).data.beerSearch.items[0].id;
    dataString.query = 'query { beerReviews(beerId: ' + beerID + ') { items { score comment scores { aroma flavor mouthfeel overall }}}}';
    options.body = JSON.stringify(dataString);
    request(options, (req2, res2) => {
      const reviews = JSON.parse(res2.body).data.beerReviews.items;
      res.json(reviews);
    });
  });
});


module.exports = router;