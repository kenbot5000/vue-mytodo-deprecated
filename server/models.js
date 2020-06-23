const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: String,
  password: String
});

let itemSchema = new Schema({
  user: Schema.Types.ObjectId,
  content: String,
  done: Boolean,
});

let User = mongoose.model('User', userSchema);
let Item = mongoose.model('Item', itemSchema);

module.exports.User = User;
module.exports.Item = Item;
