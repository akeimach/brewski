const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route to get a specific user's beer and review
router.get("/:id", (req, res) => {
  db.Users.findAll({
    where: {
      id: req.params.id
    },
    include: [
      { model: db.Beers },
      { model: db.Reviews }
    ]
  })
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
  });
});

// POST route to find or create new beer when user takes a pic of beer
router.post("/:id", (req, res) => {
  db.Beers.findOrCreate({
    where: {
      beername: req.body.beername
    },
    defaults: (req.body)
  })  
  .spread((beer, created) => {
    db.UsersBeers.create({
      UserId: req.params.id,
      BeerId: beer.dataValues.id
    });
    res.json(beer);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;