const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // This will clean the output directory before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Template for the generated HTML
    }),
  ],
  mode: 'development', // or 'production' for a production build
};
