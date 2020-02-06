const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // loaders always work in reverse from right to left, not left to right
        use: [
          "style-loader", //inject styles to dom
          "css-loader", // css to js
          "sass-loader"
        ] // sass to css
      }
    ]
  }
});
