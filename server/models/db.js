const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/heroDB"; 

mongoose.connect(DB_URL);

mongoose.connection.on("connected", () => {
  console.log("数据库已经连接！！");
});
mongoose.connection.on("error", () => {
  console.log("数据库连接错误>>>>>>>>>>");
})
mongoose.connection.on("disconnected", () => {
  console.log(">>>>>>>>数据库已断开经接！！");
});

module.exports = mongoose;