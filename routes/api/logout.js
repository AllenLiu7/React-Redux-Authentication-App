const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log(req.user);
  req.logout();
  res.json({ message: 'logged out' });
});

module.exports = router;
