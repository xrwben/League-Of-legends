const multer = require("multer");
const utils = require("../utils/utils.js");

var upload = multer({ 
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
      // cb(null, path.resolve(__dirname, './uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  }) 
});

exports.uploadAny = upload.any();
exports.uploadRes = (req, res, next) => {
  utils.responseClient(res, 200, 0, "添加成功", {
    filePath: `http://localhost:9999/${req.files[0].path}`
  });
}
// exports.uploadObj = {
//   uploadAny: upload.any(),
//   uploadRes: (req, res, next) => {
//     // let resData = {
//     //   filePath: `http://localhost:9999/${req.files[0].path}`
//     // }
//     utils.responseClient(res, 200, 0, "添加成功", {
//       filePath: `http://localhost:9999/${req.files[0].path}`
//     });
//   }
// }

// exports.upload = (req, res) => {
//   var upload = multer({ 
//     storage: multer.diskStorage({
//       destination: function (req, file, cb) {
//         cb(null, './uploads');
//         // cb(null, path.resolve(__dirname, './uploads'));
//       },
//       filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//       }
//     }) 
//   });
  
//   app.post('/api/upload', upload.any(), (req, res, next) => {
//     // console.log("single---file", req.file);  
//     console.log("any---files", req.files);
//     let resData = {
//       filePath: `http://localhost:9999/${req.files[0].path}`
//     }
//     utils.responseClient(res, 200, 0, "添加成功", resData);
//     // res.json({
//     //   code: 200,
//     //   filePath: `http://localhost:9999/${req.files[0].path}`
//     // });
//   })
// }