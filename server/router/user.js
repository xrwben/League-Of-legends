const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.post("/register", (req, res) => {
  console.log("hellow world!");
});

module.exports = router;