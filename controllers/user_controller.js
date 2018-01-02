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
// POST route to create a user account or to see if User already exists
router.post("/", (req, res) => {
// router.post("/api/user", (req, res) => {
    db.Users.findOrCreate({
        where: {
            userId: req.body.userId,
            googleId: req.body.googleId
        }
    })
    .spread((user, created) => {
        console.log(user.get({
            plain: true
        }));
        console.log(created);
    })
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

passport.use(new GoogleTokenStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));