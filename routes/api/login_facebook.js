const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('facebook'));

router.get(
  '/redirect',
  passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: '/login/failed',
  })
);

module.exports = router;
