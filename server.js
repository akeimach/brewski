const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const routes = require("./routes");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MAYBE???
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({ extended: true }));


// Serve up static assets
app.use(express.static("client/build"));
app.use(routes);

// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
// 	process.env.MONGODB_URI || "mongodb://localhost/brewski",
// 	{
// 		useMongoClient: true
// 	}
// 	);

// // Start the API server
// app.listen(PORT, function() {
// 	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});