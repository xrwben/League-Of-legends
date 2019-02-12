const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = require("./router/user.js");

app.use("/leagueOfLegends", router);

app.listen("9999", () => {
  console.log("英雄联盟后台服务正在9999端口运行！！！");
});