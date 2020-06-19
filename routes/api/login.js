const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', async (req, res, next) => {
  passport.authenticate('login', async (error, user, info) => {
    try {
      if (error) {
        return res.status(500).json({
          message: 'Ooops, somthing happend',
          error: error || 'internal server errror',
        });
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
