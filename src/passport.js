const passport = require('passport');
const { User } = require('./db');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({
      where: {
        email: username
      }
    })
      .then(function (user) {
        if (user === null) {
          return done(null, false)
        }

        if (bcrypt.compareSync(password, user.password)) {
          return done(null, user)
        }

        return done(null, false)
      })
      .catch(err => {
        return done(err)
      })
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(err => {
      return done(err);
    })
});

module.exports = passport;