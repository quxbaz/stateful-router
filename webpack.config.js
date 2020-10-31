const path = require('path')
const abs = (...args) => path.resolve(__dirname, ...args)

module.exports = (env='production') => ({

  entry: env === 'development'
    ? abs('test/index.js')
    : abs('src/index.js'),

  output: env === 'production' ? {
    filename: 'stateful-router.js',
    path: abs('lib/'),
    library: 'stateful-router',
    libraryTarget: 'umd',
  } : {},

  optimization: {
    minimize: false,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [abs('./src'), abs('./test')],
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
      },
    ],
  },

  resolve: {
    alias: {
      'stateful-router': abs('src'),
    },
    modules: [
      abs('src'),  // Enables absolute imports relative to the src/ directory.
      'node_modules',
    ],
  },

  externals: env === 'production' ? {
    'react': true,
    'prop-types': true,
  } : {},

})
