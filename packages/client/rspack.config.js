const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.jsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
