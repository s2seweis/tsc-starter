// next.config.js
module.exports = {
  /* config options here */
  webpack(config, options) {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    return config;
  },
};
