const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  req.logout();
  res.json({ message: 'logged out' });
});

module.exports = router;
