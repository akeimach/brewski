const router = require("express").Router();
const brewRoutes = require("./brews");

// Beer routes
router.use("/", brewRoutes);

module.exports = router;
