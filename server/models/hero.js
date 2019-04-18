const mongoose = require("./db.js");

const heroSchema = mongoose.Schema({
  name: {type: String},
  subname: {type: String},
  properties: {type: String},
  sex: {type: String},
  address: {type: String},
  skill: {type: String},
  properties: {type: String},
  introduce: {type: String},
  img: []
});

module.exports = mongoose.model("hero", heroSchema);