const db = require("../models");
const express = require("express");
const router = express.Router();


// GET route to get all reviews written by one user
router.get("/:userId", (req, res) => {
  console.log("Reviews for user " + req.params.userId);
  // db.Reviews.findAll({include: [{model: db.Beers, where: {active: true}}];
  db.Reviews.findAll({
    where: {
      UserId: req.params.userId,
    },
    include: [{
      model: db.Beers
    }],
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

// GET route to get all reviews for a specific beer (not based on user), can either show each review or avg them
router.get("/beers/:beerId", (req, res) => {
  db.Reviews.findAll({
    where: {
      UserId: req.params.beerId
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
router.post("/", (req, res) => {
  console.log("Post review: ", req.body);
  db.Reviews.create(req.body, {
    where: {
      UserId: req.body.UserId,
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

// PUT route to update previous review
router.put("/", (req, res) => {
  console.log("Update review: ", req.body);
  db.Reviews.update(req.body, {
    where: {
      UserId: req.body.UserId,
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
router.delete("/:id", (req, res) => {
  db.Reviews.destroy({
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