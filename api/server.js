const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const UsersDB = require('../database/models_routers/users/usersModel.js');
require('dotenv').config()

const passport = require('passport');
// var config = require('../oauth.js');
// var GoogleStrategy = require('passport-google-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;

// passport.serializeUser(function(user, done) {
//     done(null, user);
//   });

//   passport.deserializeUser(function(obj, done) {
//     done(null, obj);
//   });

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
        UsersDB.findByEmail({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    UsersDB.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });
  
const usersRouter = require('../database/models_routers/users/usersRouter.js')
const ingredientsRouter = require('../database/models_routers/ingredients/ingredientsRouter.js')
const userRecipeRouter = require('../database/models_routers/user_recipes/user_recipes_router.js')
const seededRecipeRouter = require('../database/models_routers/seeded_recipes/seeded_recipes_router.js')

const server = express();

server.use(require('morgan')('combined'));
server.use(require('body-parser').urlencoded({ extended: true }));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);
// server.use('/users', ensureLoggedIn, usersRouter);
server.use('/ingredients', ingredientsRouter)
server.use('/userrecipes', userRecipeRouter)
server.use('/seededrecipes', seededRecipeRouter)

server.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false }));

server.use(passport.initialize());
server.use(passport.session());

//test endpoints

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

// server.post('/login', 
// //   passport.authenticate('local', { failureRedirect: '/' }),
//     function(req, res) {
//         req.isAuthenticated()
//         res.redirect('/master');
//   });

server.post('/login', 
  passport.authenticate('local', { failureRedirect: '/' }),
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