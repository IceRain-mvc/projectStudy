let path = require("path");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output:{
    filename: "bundle.js",
    path: path.resolve(__dirname,"dist")// 相对路径 绝对路径  resolve  相对路径 -->绝对路径
  }
};
