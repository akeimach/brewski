const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route to get a specific user's beer and review
router.get("/api/beers", (req, res) => {
	db.User.findAll({
		where: {
			id: req.body.id
		},
		include: [{
			model: db.Beer,
			through: {
				attributes: ["beername", "brewery", "abv", "shortDes", "avgBeerScore"]
			},
			include: [{
				model: db.Review,
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
router.post("/api/beers", (req, res) => {
	db.Beer.create(req.body)
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
        console.log(err);
    });  
});

// // PUT route to update avgBeerScore LOOK INTO THIS
// router.put("/api/beers", (req, res) => {
//   db.Beer.update({
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