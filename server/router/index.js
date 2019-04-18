const user = require("./user.js");
// const hero = require("./hero.js");

module.exports = (app) => {
  app.post("/leagueOfLegends/register", user.resgister);
  app.post("/leagueOfLegends/login", user.login);
}