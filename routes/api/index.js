const router = require("express").Router();
const visionRoutes = require("./visionRoutes");
const beerRoute = require("./controllers/beer_controller.js");

// Google vision api route
router.use("/vision", visionRoutes);
router.use("/", beerRoute);

module.exports = router;
