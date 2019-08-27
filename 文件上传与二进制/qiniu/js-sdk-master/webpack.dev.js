let merge = require("webpack-merge");
let path = require("path");
let webpack = require("webpack");
let common = require("./webpack.common.js");
let OpenBrowserPlugin = require("open-browser-webpack-plugin");
module.exports = merge(common, {
  plugins:[new OpenBrowserPlugin({ url: "http://0.0.0.0:8080/test/demo1/" })],
  devServer: {
    disableHostCheck: true,
    progress: true,
    proxy: {
      "/api/*": {
        target: "http://0.0.0.0:9000",
        changeOrigin: true,
        secure: false
      }
    },
    host: "0.0.0.0", 
    contentBase: path.join(__dirname, "./"),
    publicPath: "/dist/",
    hot: false,
    inline: false
  }
});
