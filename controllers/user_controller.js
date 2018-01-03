const db = require("../models");
const express = require("express");
const router = express.Router();
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleAuth = require('google-auth-library');
const auth = new GoogleAuth;
const client = new auth.OAuth2(process.env.REACT_APP_OAUTH_CLIENT_ID, '', '');




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
            googleId: req.body.googleId
        }, 
        defaults: {
            username: "xxxx",
            email: "sdgsdgx@gmail.com",
            location: "xsfgdfghdfgh",
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
        console.log("dbUSER IS ======" + dbUser);
        // client.verifyIdToken(
        //     dbUser,
        //     process.env.REACT_APP_OAUTH_CLIENT_ID,
        //     // Or, if multiple clients access the backend:
        //     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
        //     function(e, login) {
        //         const payload = login.getPayload();
        //         let userid = payload['sub'];
        //         console.log("USER ID IS" + userId);
        //         // If request specified a G Suite domain:
        //         //var domain = payload['hd'];
        //     }
        // );
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


// // Use the GoogleStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and Google
// //   profile), and invoke a callback with a user object.
// passport.use(new GoogleStrategy({
//     clientID: process.env.REACT_APP_OAUTH_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
// },
//     function(accessToken, refreshToken, profile, done) {
//         db.Users.findOrCreate({ googleId: profile.id }, function (err, user) {
//             return done(err, user);
//         });
//     }
// ));

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// // GET /auth/google/callback
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request.  If authentication fails, the user will be redirected back to the
// //   login page.  Otherwise, the primary route function function will be called,
// //   which, in this example, will redirect the user to the home page.
// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });