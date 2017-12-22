require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const db = require("./models");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MAYBE???
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({ extended: true }));
const request = require("request");

var headers = {
  "content-type": "application/json",
  "accept": "application/json",
  "x-api-key": process.env.RATE_BEER
};

var dataString = '{"query":"query { beerReviews(beerId: 4934, first: 5) { items { id score } totalCount last } }"}';

// { beerReviews(beerId: 4934, first: 5) { items { id score } totalCount last } }

// '{"query":"query { beerSearch(query: "corona", first: 5) { items { id name brewer { name } abv description averageRating ratingCount imageUrl } totalCount last }}"}';
// query { beerSearch(query: "sculpin", first: 5) { items { id name brewer { name } abv description averageRating ratingCount imageUrl } totalCount last }}

// '{"query":"query { beer(id: 4934) { name }}"}';
        // query { beer(id: 4934) { name }}

var options = {
  url: "https://api.r8.beer/v1/api/graphql/",
  method: "POST",
  headers: headers,
  body: dataString
};

// request(options, (req, res) => {
//   console.log(dataString);
//   console.log(res.body);
// });

// Serve up static assets
app.use(express.static("client/build"));

app.use(routes);
// app.use("/", beerRoute);





// routes
// const router = express.Router();
// router.use("/", beerRoute);
// router.use("/", usersRoute);
// router.use("/", reviewRoute);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});