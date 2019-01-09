const express = require("express");
const app = express();

const router = require("./router/user.js");

app.use("/leagueOfLegends", router);

app.listen("9999", () => {
  console.log("英雄联盟后台服务正在9999端口运行！！！");
});