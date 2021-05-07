const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./src/view.js", "./src/service.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new Dotenv({
        path: './api.env',
      systemvars: true,
    }),
  ],
};
