var path = require('path')

// env = 'build' | 'test'
module.exports = (env='test') => ({

  entry: env === 'build'
    ? path.resolve(__dirname, 'src/index')
    : path.resolve(__dirname, 'test/index'),

  output: env === 'build' ? {
    filename: 'stateful-router.js',
    library: 'statefulRouter',
    libraryTarget: 'umd',
  } : {
    filename: 'bundle.js',
    publicPath: '/assets/',
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

  externals: {
    'React': 'react',
    'ReactDOM': 'react-dom',
  },

})
