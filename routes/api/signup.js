const express = require('express');
const passport = require('passport');

const router = express.Router();

//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously

router.post('/', async (req, res, next) => {
  passport.authenticate('signup', async (error, user, info) => {
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

        return res.json({ user, info });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
