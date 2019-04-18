// const express = require("express");
// const router = express.Router();

const User = require("../models/user.js");
const utils = require("../utils/utils.js");

exports.resgister = (req, res) => {
  // let { username, password } = req.body;
  User.find({"user": req.body.username}, (err, data) => {
    if (err) {
      return console.error(err);
    } else if (data.length) {
      utils.responseClient(res, 200, 1, "用户名已注册", data);
    } else {
      User.create({
        user: req.body.username,
        password: req.body.password,
        createTime: new Date().getTime(),
        updateTime: new Date().getTime()
      }, (err, data) => {
        if (err) {
          return console.error(err);
        } else {
          utils.responseClient(res, 200, 0, "注册成功", data);
        }
      })
    }
  })
}

exports.login = (req, res) => {
  let { username, password } = req.body;
  User.findOne({"user": username, "password": password}, (err, data) => {
    console.log(data);
    if (err) {
      return console.error(err);
    } else if(data) {
      req.session.userInfo = data;
      utils.responseClient(res, 200, 0, "登录成功", data);
    } else {
      utils.responseClient(res, 200, 1, "用户名或密码错误", data);
    }
  })
}