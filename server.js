const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const db = require("./models");
const routes = require("./routes");
const beerRoute = require("./controllers/beer_controller.js");
const usersRoute = require("./controllers/user_controller.js");
const reviewRoute = require("./controllers/review_controller.js");
const app = express();
const PORT = process.env.PORT || 3001;
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const router = express.Router();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

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

// routes
router.use("/", beerRoute);
router.use("/", usersRoute);
router.use("/", reviewRoute);
const root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});