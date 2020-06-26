let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let {User, Item} = require('./models');

mongoose.connect('mongodb://localhost/mytodo', { useNewUrlParser: true,  useUnifiedTopology: true }); 

router.get('/users', async (req, res) => {
  let users = await User.find();
  res.json(users);
});

router.get('/users/:username', async (req, res) => {
  let user = await User.findOne({ username: req.params.username });
  if (user != undefined) {
    res.json(user);
  } else {
    res.status = 404;
    res.json({ "response": "User not found!" });
  }
});

router.post('/users', async (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  newUser.save();
  res.json(newUser);
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
    res.json(user);
  } catch {
    res.status(404);
    res.json({ "response": "User not found!" });
  }
});

router.delete('/users/:username', async(req, res) => {
  try {
    await User.deleteOne({ username: req.params.username });
    res.status(204).json();
  } catch {
    res.status(404);
    res.json({ "response": "User not found!" });
  }
});

router.get('/todo/', async (req, res) => {
  let todos = await Item.find();
  res.json(todos);
});

router.post('/todo/', async (req, res) => {
    let newTodo = new Item({
      user: req.body.user,
      content: req.body.content,
      done: req.body.done
    });
}); 

module.exports = router;