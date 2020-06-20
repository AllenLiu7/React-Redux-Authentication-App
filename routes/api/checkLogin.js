const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json('no user log in');
  }
});

module.exports = router;
