const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously

router.post('/', passport.authenticate('signup'), async (req, res, next) => {
  res.json({
    message: 'Signup successful',
    user: req.user.email,
  });
});

module.exports = router;
