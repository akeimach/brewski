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

// POST route to create new beer when user takes a pic of beer
router.post("/:id", (req, res) => {
  db.Beers.create(req.body)
  .then((data1) => {
    db.UsersBeers.create({
      UserId: req.params.id,
      BeerId: data1.dataValues.id
    })
    .then((data2) => {
      res.json(data2);
    })
    .catch((err2) => {
      console.log(err2);
    });
  })
  .catch((err1) => {
    console.log(err1);
  });
});

 
module.exports = router;