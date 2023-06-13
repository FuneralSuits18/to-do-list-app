/* eslint-disable */ 
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  experiments: {
    topLevelAwait: true,
  },
  entry: ['./src/index.js', './src/form-handler.js', './src/signin.js'],
  output: {
    path: path.join(__dirname, 'public'),
  }
};
