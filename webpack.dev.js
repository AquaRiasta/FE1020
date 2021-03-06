const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  },
  devServer: {
    static: './dist',
    hot: true,
    historyApiFallback: true,
  },
});