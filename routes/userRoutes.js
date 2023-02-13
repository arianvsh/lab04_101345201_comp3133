const express = require('express');
const User = require('../models/users');
const router = express.Router();
const app = express();

router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;




