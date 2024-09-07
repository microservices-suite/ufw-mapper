const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Apply rules to .css files
        use: ['style-loader', 'css-loader'], // Loaders for CSS files
      },
      {
        test: /\.scss$/, // Apply rules to .scss files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Loaders for SCSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'], // File extensions to resolve
  },
};
