let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let {User, Item} = require('./models');

mongoose.connect('mongodb://localhost/mytodo'); 

router.get('/users', async (req, res) => {
  let users = await User.find();
  res.send(users);
});

router.get('/users/:username', async (req, res) => {
  let user = await User.findOne({ username: req.params.username });
  if (user != undefined) {
    res.send(user);
  } else {
    res.status = 404;
    res.send({ "response": "User not found!" });
  }
});

router.post('/users', async (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  newUser.save();
  res.send(newUser);
});

router.patch('/users/:username', async(req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.password) {
      user.password = req.body.password;
    }
    await user.save();
    res.send(user);
  } catch {
    res.status(404);
    res.send({ "response": "User not found!" });
  }
});

router.delete('/users/:username', async(req, res) => {
  try {
    await User.deleteOne({ username: req.params.username });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ "response": "User not found!" });
  }
});

module.exports = router;