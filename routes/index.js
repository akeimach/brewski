const axios = require("axios");
const router = require("express").Router();
const visionRoute = require("./api/visionRoute");


router.route("/api/vision")
  .get(visionRoute.searchImage, (req, res) => {
    console.log(req);
  });


// router.get("/api/vision", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

module.exports = router;
