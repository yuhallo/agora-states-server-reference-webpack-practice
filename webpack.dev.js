const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// 첫 번째 인자는 "style-loader"를 넣어주기 위함...;;
const customizedDevCommon = {
  ...common,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = merge(customizedDevCommon, {
  mode: "development",
  devServer: {
    port: 8000,
  },
  devtool: "eval-source-map",
});

// console.log(
//   merge(customizedDevCommon, {
//     mode: "development",
//     devServer: {
//       port: 8000,
//     },
//     devtool: "eval-source-map",
//   }).module.rules
// );
