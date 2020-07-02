const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login/fail' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/secrets');
  }
);

router.get('/facebook', passport.authenticate('facebook'));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login/fail' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/secrets');
  }
);

module.exports = router;
