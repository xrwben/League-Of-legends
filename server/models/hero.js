const mongoose = require("./db.js");

const heroSchema = mongoose.Schema({
  title: {type: String},
  name: {type: String},
  sex: {type: String},
  address: {type: String},
  skill: {type: String},
  properties: {type: String},
  introduce: {type: String},
  img: []
});

module.exports = mongoose.model("hero", heroSchema);