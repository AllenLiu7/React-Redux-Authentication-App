const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously

router.post('/', async (req, res, next) => {
  passport.authenticate('signup', async (err, user, info) => {
    try {
      if (err) {
        const error = new Error('An Error occurred');
        return next(error);
      }
      if (err && user) {
        return res.json(info);
      }
      return res.json({ user, info });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// router.post('/', passport.authenticate('signup'), async (req, res, next) => {
//   res.json({
//     message: 'Signup successful',
//     user: req.user.email,
//   });
// });

module.exports = router;
