const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // entry 랑 비슷 , 핵심이 되는 스크립트 바라보게
      filename: "./index.html", // output 랑 비슷,
      showErrors: true, // dev-server error 발생시 브라우저에 에러 노출
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // dev server 경로 시작점,
    inline: true,
    hot: true, // 번들링할때마다 새롭게 저장 (webpack의 HMR 기능 활성화)
    open: true,
  },
};
