
module.exports = {
  mode:'development',
  entry: './src/src/js/script.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js',
  },
  watch: true,
  devtools: 'source-map',
  module: {},
};