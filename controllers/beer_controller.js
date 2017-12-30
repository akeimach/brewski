const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route to get a specific user's beer and review
router.get("/", (req, res) => {
	db.Users.findAll({
		where: {
			id: req.body.id
		},
		include: [{
			model: db.Beers,
			through: {
				attributes: ["beername", "brewery", "abv", "ibu", "foodPairings", "isOrganic", "shortDes", "avgBeerScore"]
			},
			include: [{
				model: db.Reviews,
				through: ["starred", "beerRev", "beerScore"]
			}]
		}]	
	})
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
        console.log(err);
    });
});

// POST route to create new beer when user takes a pic of beer
router.post("/", (req, res) => {
	db.Beers.create(req.body)
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
        console.log(err);
    });  
});

// // PUT route to update avgBeerScore LOOK INTO THIS
// router.put("/api/beers", (req, res) => {
//   db.Beers.update({
//   	req.body,
//     },
//     {    
//       where: {
//         id: req.params.id
//       },
//       include: [
//         {
//           model: db.Review
//         }
//       ] 
//   }).then(function(data) {
//     res.json(data);
//   });  
// });  
module.exports = router;