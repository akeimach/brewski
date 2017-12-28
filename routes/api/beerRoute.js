
const router = require("express").Router();
// const beerController = require("../../controllers/beer_controller");
const axios = require("axios");



router.get("/:name", (req, res) => {
	// console.log("testing===========");

  axios
    .get("http://api.brewerydb.com/v2/beers?key=b269c222a8599122e8f011edb23e3bbb&name=" + req.params.name)
    .then(({data}) => {
    	// console.log("++++++++++++++++++++++++++++")
    	// console.log(data)
    	return res.json(data)
    })
    .catch(err => res.status(422).json(err));
});



module.exports = router;














// const router = require("express").Router();
// // const beerController = require("../../controllers/beer_controller");
// const axios = require("axios");



// router.get("/:name", (req, res) => {
// 	console.log("testing===========");

//   axios
//     .get("http://api.brewerydb.com/v2/beers?key=b269c222a8599122e8f011edb23e3bbb&name="+req.params.name)
//     .then(({data}) => {
//     	console.log("++++++++++++++++++++++++++++")
//     	console.log(data)
//     	return res.json(data)
//     })
//     .catch(err => res.status(422).json(err));
// });



// module.exports = router;
