const path = require("path");
const router = require("express").Router();
const visionRoutes = require("./api/visionRoutes");
const rateBeerRoutes = require("./api/rateBeerRoutes");
const beerRoute = require("./api/beerRoute");

// API Routes
router.use("/api/vision", visionRoutes);
router.use("/api/ratebeer", rateBeerRoutes);
router.use("/api/breweryDB", beerRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;