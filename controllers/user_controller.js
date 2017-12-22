const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route to display user name at user's page
router.get("/:id", (req, res) => {
// router.get("/api/user", (req, res) => {
    db.Users.findOne({
        where: {
            id: req.params.id
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
router.post("/", (req, res) => {
// router.post("/api/user", (req, res) => {
    db.Users.create(req.body)
    .then((dbUser) => {
        res.json(dbUser);
    })
    .catch((err) => {
        console.log(err);
    });
});
// DELETE route to delete user account 
router.delete("/", (req, res) => {
// router.delete("/api/user", (req, res) => {
    db.Users.destroy({
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

module.exports = router;