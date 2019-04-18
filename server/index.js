const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// session中间件
app.use(session({
  secret :  'liben', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie : {
      maxAge : 1000 * 60 * 1, // 设置 session 的有效时间，单位毫秒
  },
}))

app.use((req, res, next) => {
  console.log(req.url);
  if (["/leagueOfLegends/login", "/leagueOfLegends/register"].includes(req.url)) {
    next();
  } else if (req.session.userInfo) {
    next();
  } else {
    res.send("未登录");
  }
})

const router = require("./router/index.js");
router(app);

// app.use("/leagueOfLegends", router);

app.listen("9999", () => {
  console.log("英雄联盟后台服务正在9999端口运行！！！");
});