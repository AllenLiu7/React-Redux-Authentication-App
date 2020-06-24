const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  if (!req.user) {
    throw new Error('User not authenticated');
  }
  res.json(req.user);
});

module.exports = router;
