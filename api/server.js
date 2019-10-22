const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

var passport = require('passport');
// var config = require('../oauth.js');
// var GoogleStrategy = require('passport-google-oauth2').Strategy;
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

// passport.use(new GoogleStrategy({
//     clientID: 449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

passport.use(new LocalStrategy(
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

const usersRouter = require('../database/models_routers/users/usersRouter.js')
const ingredientsRouter = require('../database/models_routers/ingredients/ingredientsRouter.js')
const userRecipeRouter = require('../database/models_routers/user_recipes/user_recipes_router.js')
const seededRecipeRouter = require('../database/models_routers/seeded_recipes/seeded_recipes_router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);
// server.use('/users', ensureAuthenticated, usersRouter);
server.use('/ingredients', ingredientsRouter)
server.use('/userrecipes', userRecipeRouter)
server.use('/seededrecipes', seededRecipeRouter)

server.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false }));


//test endpoints
// server.get('/', (req, res) => {
//     res.status(200).json({ api: 'up' });
// });

server.post('/login', 
  passport.authenticate('local', { failureRedirect: '/users/allusers' }),
    function(req, res) {
        res.redirect('/master');
  });

  server.get('/master', 
    require('connect-ensure-login').ensureLoggedIn(),
        (req, res) => {
            res.redirect('/users/allusers');
            // res.status(200).json({ api: 'up' });
});

module.exports = server;