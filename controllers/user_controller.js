const db = require("../models");
const express = require("express");
const router = express.Router();
const GoogleAuth = require("google-auth-library");
const auth = new GoogleAuth;
const client = new auth.OAuth2(process.env.REACT_APP_OAUTH_CLIENT_ID, "", "");

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
  client.verifyIdToken(
    req.body.googleId,
    process.env.REACT_APP_OAUTH_CLIENT_ID,
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
    function(e, login) {
      const payload = login.getPayload();
      let userid = payload["sub"];
      let username = payload["name"];
      let useremail = payload["email"];
      let userpicture = payload["picture"];
      // If request specified a G Suite domain:
      db.Users.findOrCreate({
        where: {
          googleId: userid
        }, 
        defaults: {
          username: username,
          email: useremail,
          picture: userpicture,
        }    
      })
      .spread((user, created) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  );
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
