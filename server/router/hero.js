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
  const { heroName, pageNum, pageSize } = req.body;
  Hero.find({}).skip((pageNum - 1) * pageSize).limit(pageSize).sort({"updateTime": '-1'}).exec((err, doc) => {
    res.json({data: doc});
  })
  // if (!pageNum || !pageSize) {
  //   pageNum = 1;
  //   pageSize = 10;
  // }
  // Hero.find({heroName: heroName}).skip((pageNum - 1) * pageSize).limit(pageSize).exec((err, doc) => {
  //   if (err) {
  //     return console.error(err);
  //   } else {
  //     const resData = {
  //       pagination: {
  //         pageNum: pageNum,
  //         pageSize: pageSize,
  //         totalSize: Hero.count()
  //       },
  //       heroList: doc
  //     }
  //     utils.responseClient(res, 200, 0, "查询成功", resData);
  //   }
  // })
}

exports.updateHero = (req, res) => {
  console.log(req.body);
}

exports.deleteHero = (req, res) => {
  console.log(req.body);
}