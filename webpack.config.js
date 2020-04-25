const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  devtool: "inline-source-map", // source map 처리
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
    extensions: [".js"], // 확장자를 생략할 수 있도록
  },
  output: {
    filename: "[name].bundle.js", // bundle 될 파일 이름
    path: path.resolve(__dirname, "dist"), // 위치
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      showErrors: true, // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
    }),
  ],
  devServer: {
    // webpack dev server
    contentBase: path.resolve(__dirname, "dist"),
    inline: true,
    hot: true,
    open: true,
  },
};
