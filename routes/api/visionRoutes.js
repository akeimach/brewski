const router = require("express").Router();
const visionController = require("../../controllers/vision_controller");
const axios = require("axios");

// Matches with "/api/vision"
router.route("/")
  .post(visionController.searchImage);

router.route("/").get(function(req, res) {
    console.log("Router get request for /api/vision: ");
    console.log(req.body);
  });





module.exports = router;