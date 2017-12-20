const router = require("express").Router();
const visionRoutes = require("./visionRoutes");

// Google vision api route
router.use("/vision", visionRoutes);

module.exports = router;
