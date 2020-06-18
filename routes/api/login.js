const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (!user) {
        return res.json({ info });
      }
      if (err) {
        const error = new Error('An Error occurred');
        return next(error);
      }
      req.login(user, async (error) => {
        if (error) return next(error);

        return res.json({ user, info });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
