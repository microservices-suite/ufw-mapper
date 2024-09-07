const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  target: 'node', // Target Node.js for the main process
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  externals: {
    electron: 'commonjs2 electron', // Avoid bundling Electron itself
  },
};
