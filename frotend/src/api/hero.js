import axios from './http.js';

export default {
  addHero (params) {
    return new Promise((resolve, reject) => {
      axios.post("/leagueOfLegends/addHero", {
        name: params.name,
        subname: params.subname,
        properties: params.properties,
        sex: params.sex,
        skill: {
          a: params.a,
          q: params.q,
          w: params.w,
          e: params.e,
          r: params.r
        },
        introduce: params.introduce,
        usage: {
          self: params.self,
          other: params.other
        },
        images: params.images
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  },
  async getHeroList (params) {
    return await axios.post("/leagueOfLegends/getHeroList", {
      searchKey: params.searchKey,
      pageNum: params.pageNum,
      pageSize: params.pageSize
    })
  },
  async deleteHero (heroId) {
    return await axios.post("/leagueOfLegends/deleteHero", {
      heroId
    })
  }
}