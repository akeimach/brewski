const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route to get all reviews for a specific beer (not based on user), can either show each review or avg them
router.get("/api/reviews", (req, res) => {
	db.Review.findAll({
    	where: {
    		BeerId: req.body.id
    	},
    	order: [
    		["createdAt", "DESC"]
    	]
    })
    .then((data) => {
    	res.json(data);
    })
    .catch((err) => {
        console.log(err);
    });
});


// POST route to create new review
router.post("/api/reviews", (req, res) => {
	db.Review.create(req.body)
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
        console.log(err);
    }); 
});   

// PUT route to update previous review
router.put("/api/reviews", (req, res) => {
	db.Review.update(req.body, {    
		where: {
			UserId: req.body.UserId,
			id: req.body.id,
			BeerId: req.body.BeerId
		}
	})
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
        console.log(err);
    });  
});

// DELETE route to delete previous review for a user based on UserId and id
router.delete("/api/reviews", (req, res) => {
	db.Review.destroy({
		where: {
			UserId: req.body.UserId,
			id: req.body.id,
			BeerId: req.body.BeerId
		}
	})
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
        console.log(err);
    });
});

module.exports = router;