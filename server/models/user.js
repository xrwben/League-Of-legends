const mongoose = require("./db.js");

const UserSchema = mongoose.Schema({
  user: String,
  password: String,
  createTime: Date,
  updateTime: Date
});

module.exports = mongoose.model("user", UserSchema);