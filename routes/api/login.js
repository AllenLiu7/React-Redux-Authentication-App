const express = require('express');
const passport = require('passport');

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
        if (error) {
          res.status(500).json({
            message: 'Ooops, somthing happend',
            error: error || 'internal server errror',
          });
        }

        return res.send(user);
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
