const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route to display user name at user's page
router.get("/api/user", (req, res) => {
    console.log(req.user);
    db.Users.findOne({
        where: {
            id: req.users.id
        }
    })
    .then((dbUsers) => {
        res.json(dbUsers);
    })
    .catch((err) => {
        console.log(err);
    });
});
// POST route to create a users account
router.post("/api/user", (req, res) => {
    db.Users.create(req.body)
    .then((dbUsers) => {
        res.json(dbUsers);
    })
    .catch((err) => {
        console.log(err);
    });
});
// DELETE route to delete user account 
router.delete("/api/user", (req, res) => {
    db.Users.destroy({
        where: {
            id: req.users.id
        }
    })
    .then((dbUsers) => {
        res.json(dbUsers);
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;