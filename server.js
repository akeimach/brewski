var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var routes = require("./routes");
var app = express();
var db = require("./models");
var PORT = process.env.PORT || 3001;
const router = require("express").Router();
const beerRoute = require("./controllers/beer_controller.js");
const userRoute = require("./controllers/user_controller.js");
const reviewRoute = require("./controllers/review_controller.js");
const visionRoute = require("./controllers/vision_controller.js");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MAYBE???
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({ extended: true }));


// Serve up static assets
app.use(express.static("client/build"));
// app.use(routes);


// routes
router.use("/", beerRoute);
router.use("/", userRoute);
router.use("/", reviewRoute);
router.use("/", visionRoute);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});