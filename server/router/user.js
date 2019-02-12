const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.post("/register", (req, res) => {
  User.find({"user": req.body.username}, (err, data) => {
    if (err) {
      return console.error(err);
    } else if (data.length) {
      res.send({
        code: 1,
        msg: "账号已经存在！"
      });
    } else {
      console.log(req.body);
      User.create({
        user: req.body.username,
        password: req.body.password,
        createTime: new Date().getTime(),
        updateTime: new Date().getTime()
      }, (err, data) => {
        if (err) {
          return console.error(err);
        } else {
          console.log(data);
          res.send({
            code: 0,
            msg: "注册成功！"
          });
        }
      })
    }
  })
});

module.exports = router;