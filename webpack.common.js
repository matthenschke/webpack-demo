const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
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
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};
