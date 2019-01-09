import axios from "./http.js";

export default {
  // 登录
  login (username, password) {
    return new Promise((resolve, reject) => {
      axios.post("/leagueOfLegends/login", {
        username,
        password
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  },
  // 注册
  register (username, password) {
    return new Promise((resolve, reject) => {
      axios.post("/leagueOfLegends/register", {
        username,
        password
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
};