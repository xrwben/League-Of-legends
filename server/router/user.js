const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.post("/register", (req, res) => {
  User.find({"user": req.body.username}, (err, data) => {
    if (err) {
      return console.err(err);
    } else {
       
    }
  })
});

module.exports = router;