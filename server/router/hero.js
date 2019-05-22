const Hero = require("../models/hero.js");
const utils = require("../utils/utils.js");

exports.addHero = (req, res) => {
  console.log(req.body);
  const reqData = new Hero(req.body);
  reqData.save((err, doc) => {
    if (err) {
      return console.error(err);
    } else {
      utils.responseClient(res, 200, 0, "添加成功", doc);
    }
  })
}

exports.getHeroList = (req, res) => {
  console.log(req.body);
  const { searchKey, pageNum, pageSize } = req.body;
  const iNum = (Number(pageNum) - 1) * Number(pageSize);
  const iSize = Number(pageSize);
  let queryParams = {};
  if (searchKey) {
    const reg = new RegExp(searchKey, 'i')
    queryParams = {
      name: {$regex: reg}
    }
  }
  Hero.find(queryParams).skip(iNum).limit(iSize).sort({updateTime: '-1'}).exec((err, doc) => {
    if (err) {
      return console.error(err);
    } else {
      Hero.count(queryParams, (err, count) => {
        if (err) {
          return console.error(err);
        } else {
          const resData = {
            pagination: {
              pageNum: pageNum,
              pageSize: pageSize,
              totalSize: count
            },
            heroList: doc
          }
          utils.responseClient(res, 200, 0, "查询成功", resData);
        }
      })
    }
  })
}

exports.updateHero = (req, res) => {
  console.log(req.body);
}

exports.deleteHero = (req, res) => {
  console.log(req.body);
}