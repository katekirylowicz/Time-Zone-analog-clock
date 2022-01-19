const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: ["whatwg-fetch", "./src/index.js"],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
    assetModuleFilename: 'images/[name][ext][query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      }
    ]
  }
}