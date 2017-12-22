const router = require("express").Router();
const request = require("request");
const headers = {
    "content-type": "application/json",
    "accept": "application/json",
    "x-api-key": process.env.RATE_BEER
};

const dataString = '{"query":"query { beer(id: 4934) { id name }}","variables":"{}"}';

const options = {
  url: "https://api.r8.beer/v1/api/graphql/",
  method: "POST",
  headers: headers,
  body: dataString
};
// // Matches with "/api/ratebeer"
// router.post("/", (req, res) => {


//   request(options, (req, res) => {
//     console.log(res.body);
//   });

// });

// module.exports = router;

const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({
  uri: 'https://api.r8.beer/v1/api/graphql/',
});

fetch({
  headers: headers,
    body: dataString


}).then(res => {
  console.log(res);
});

// You can also easily pass variables for dynamic arguments
fetch({
    headers: headers,

  query: `query {
    beer(id: 4934) {
      name
    }
  }
`
}).then(res => {
  console.log(res);
});