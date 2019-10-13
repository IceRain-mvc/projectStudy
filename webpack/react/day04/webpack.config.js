let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  devServer: {
    port: 3000,
    progress: true,
    contentBase: "./src/index.html"
  },
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle[hash:8].js",
    path: path.resolve(__dirname, "dist")// 相对路径 绝对路径  resolve  相对路径 -->绝对路径
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          "babel-loader",
        ],
        exclude: "/node-modules/"

      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ],
        // include: path.resolve("./src"),
        // exclude: path.resolve("./node-modules/")
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    })
  ]
};
// module.exports = {
//   // 开发模式
//   mode: 'development',
//   // 入口 js
//   entry: './src/index.js',
//   // 产出结果
//   output: {
//     // 产出文件名
//     filename: 'bundle.js',
//     // 产出目录
//     path: __dirname + '/dist'
//   },
//   // 对各种文件类型（模块）进行处理
//   module: {
//     rules: [
//       {
//         // 对以 `.js` 结尾的文件使用 `babel-loader` 处理
//         // `babel-loader` 会自动加载`babel.config.js` 配置文件
//         test: "/\.(js|jsx)$/",
//         use: 'babel-loader',
//
//         // 排除 `node_modules` 目录，不对它做处理
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         use: [
//           "style-loader",
//           "css-loader"
//         ],
//         // include: path.resolve("./src"),
//         // exclude: path.resolve("./node-modules/")
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           "style-loader",
//           "css-loader",
//           "sass-loader"
//         ]
//       }
//     ]
//   },
//   plugins: [
//     // 使 产出结果自动插入 自定义模板 html文件
//     new HtmlWebpackPlugin({
//       template: __dirname + '/src/index.html'
//     })
//   ]
// };
