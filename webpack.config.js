module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: 'build/script.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  }
}
