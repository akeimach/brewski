const router = require("express").Router();
// const beerController = require("../../controllers/beer_controller");
const axios = require("axios");



router.get("/", (req, res) => {
  axios
    .get("http://api.brewerydb.com/v2/beers?key=b269c222a8599122e8f011edb23e3bbb&name=lagunitas ipa")
    .then(({data}) => {
    	console.log("++++++++++++++++++++++++++++")
    	console.log(data)
    	return res.json(data)
    })
    .catch(err => res.status(422).json(err));
});



module.exports = router;




// // Matches with "/api/saved"
// router.route("/")
//   // .get(beerController.findAll)
//   .post(beerController.create);

// // Matches with "/api/saved/:id"
// // router.route("/:id").delete(beerController.remove);

// module.exports = router;
