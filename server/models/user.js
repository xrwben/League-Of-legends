const mongoose = require("./db.js");

const UserSchema = mongoose.Schema({
  user: String,
  password: String,
  createTime: {type: Date, default: Date.now},
  updateTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model("user", UserSchema);