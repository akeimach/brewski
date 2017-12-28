const router = require("express").Router();
const request = require("request");
const headers = {
  "content-type": "application/json",
  "accept": "application/json",
  "x-api-key": process.env.RATE_BEER
};
const dataString = '{"query":"query { beer(id: 4934) { id name }}","variables":"{}"}';
// const options = {
//   url: "https://api.r8.beer/v1/api/graphql/",
//   method: "POST",
//   headers: headers,
//   body: dataString
// };
const beerURL = "https://api.r8.beer/v1/api/graphql/";
// const fetch = createApolloFetch({
//   uri: 'https://api.r8.beer/v1/api/graphql',
// });
require("isomorphic-fetch");
// Matches with "/api/ratebeer"
router.post("/", (req, res) => {

  fetch(beerURL, {
    method: "POST",
    credentials: "include",
    headers: {
      // "headers": {
        "content-type": "application/json",
        "accept": "application/json",
        "x-api-key": process.env.RATE_BEER
      // }
    },
    body: `beer(id: 934) {
      name
    }
    `,
  }).then(res => {
    res.status;
    res.statusText;
    res.headers;
    res.url;
    console.log(res.headers); 
    console.log(req.headers);

  }).catch(err => {
    console.log(err);
  });

  // request(options, (req, res) => {
  //   console.log(res.body);
  // });

});

module.exports = router;
