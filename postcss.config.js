module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")(),
    require("postcss-minify"),
  ],
};
