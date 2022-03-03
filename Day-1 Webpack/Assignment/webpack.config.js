const path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(jpeg|jpg|JPEG|JPG|PNG|png|gif|svg)$/i,
        loader: "file-loader",
      },
    ],
  },
};
