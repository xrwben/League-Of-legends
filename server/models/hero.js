const mongoose = require("./db.js");

const heroSchema = mongoose.Schema({
  name: {type: String},
  subname: {type: String},
  properties: {type: [String]},
  sex: {type: Number},
  skill: {
    a: {type: String},
    q: {type: String},
    w: {type: String},
    e: {type: String},
    r: {type: String}
  },
  introduce: {type: String},
  usage: {
    self: {type: String},
    other: {type: String}
  },
  images: [],
  updateTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model("hero", heroSchema);