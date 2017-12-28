const router = require("express").Router();
const request = require("request");

// Matches with "/api/ratebeer"
router.post("/", (req, res) => {

  var headers = {
    "content-type": "application/json",
    "accept": "application/json",
    "x-api-key": process.env.RATE_BEER
  };

  var dataString = '{"query":"query { beer(id: 4934) { id name }}","variables":"{}"}';

  var options = {
    url: "https://api.r8.beer/v1/api/graphql/",
    method: "POST",
    headers: headers,
    body: dataString
  };

  request(options, (req, res) => {
    console.log("--------------");
    console.log(res.body);
  });

});


module.exports = router;