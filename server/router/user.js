const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.post("/register", (req, res) => {
  User.find({"user": req.body.username}, (err, data) => {
    if (err) {
      return console.err(err);
    } else if (data.length) {
      res.send({
        code: 200,
        msg: "账号已经存在！"
      });
    } else {
      res.send({
        code: 200,
        msg: "注册成功！"
      });
    }
  })
});

module.exports = router;