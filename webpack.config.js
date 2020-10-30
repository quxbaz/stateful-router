var path = require('path')

// env = 'production' | 'development'
module.exports = (env='production') => ({

  entry: env === 'development'
    ? path.resolve(__dirname, 'test/index')
    : path.resolve(__dirname, 'src/index'),

  output: env === 'development' ? {
    filename: 'bundle.js',
    publicPath: '/assets/',
  } : {
    filename: 'stateful-router.js',
    library: 'stateful-router',
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
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './test'),
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
      'stateful-router': path.resolve(__dirname, 'src'),
    },
    modules: [
      // Enables absolute imports relative to the src/ directory.
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

  externals: env === 'production' ? {
    'react': true,
    'prop-types': true,
  } : {},

})
