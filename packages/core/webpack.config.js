const path = require("path");

module.exports = {
  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  resolve: {
    extensions: ['.wasm', '.ts', '.mjs', '.cjs', '.js', '.json'],
  },

  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }],
  },

  mode: "development",
};
