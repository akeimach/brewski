const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route to display user name at user's page
router.get("/api/user", (req, res) => {
    console.log(req.user);
    db.User.findOne({
        where: {
            id: req.user.id
        }
    })
    .then((dbUser) => {
        res.json(dbUser);
    })
    .catch((err) => {
        console.log(err);
    });
});
// POST route to create a user account
router.post("/api/user", (req, res) => {
    db.User.create({
        req.body
    })
    .then((dbUser) => {
        res.json(dbUser);
    })
    .catch((err) => {
        console.log(err);
    });
});
// DELETE route to delete user account 
router.delete("/api/user", (req, res) => {
    db.User.destroy({
        where: {
            id: req.user.id
        }
    }).then((dbUser) => {
        res.json(dbUser);
    });
});

module.exports = router;