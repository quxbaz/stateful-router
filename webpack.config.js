const path = require('path')
const abs = (...args) => path.resolve(__dirname, ...args)

// env = 'production' | 'development'
module.exports = (env='production') => ({

  entry: env === 'development'
    ? abs('test/index')
    : abs('src/index'),

  output: env === 'development' ? {
    filename: 'bundle.js',
    publicPath: '/assets/',
  } : {
    filename: 'stateful-router.js',
    library: 'stateful-router',
    path: abs('lib/'),
    libraryTarget: 'umd',
  },

  optimization: {
    minimize: false,
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          abs('./src'),
          abs('./test'),
        ],
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
      // Enables absolute imports relative to the src/ directory.
      abs('src'),
      'node_modules',
    ],
  },

  externals: env === 'production' ? {
    'react': true,
    'prop-types': true,
  } : {},

})
