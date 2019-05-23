const user = require("./user.js");
const hero = require("./hero.js");

module.exports = (app) => {
  app.post("/leagueOfLegends/register", user.resgister);
  app.post("/leagueOfLegends/login", user.login);
  app.post("/leagueOfLegends/addHero", hero.addHero);
  app.post("/leagueOfLegends/getHeroList", hero.getHeroList);
  app.post("/leagueOfLegends/getHeroDetails", hero.getHeroDetails);
  app.post("/leagueOfLegends/updateHero", hero.updateHero);
  app.post("/leagueOfLegends/deleteHero", hero.deleteHero);
}