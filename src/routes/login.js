const { Router } = require('express');
const authConfig = require('../config/auth')
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../passport.js');
const router = Router();

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw new Error(err);
    if (!user) {
      res.status(404).send('El usuario no existe');
    } else {
      let token = jwt.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expires
      });
      res.json({ user, token, msg: 'Autenticación exitosa' });
    }
  })(req, res, next);
});

module.exports = router;