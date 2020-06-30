const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
  (req, res, next) => {
    res.send(req.user);
  }
);

router.get(
  '/redirect',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: '/login/failed',
  })
);

module.exports = router;
