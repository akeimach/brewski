const router = require("express").Router();
const brewController = require("../../controllers/brewController");

// Matches with "/api/saved"
router.route("/")
  // .get(brewController.findAll)
  .post(brewController.create);

// Matches with "/api/saved/:id"
// router.route("/:id").delete(brewController.remove);

module.exports = router;
