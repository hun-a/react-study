import webpack from 'webpack';

const plugins = [];
const TRAVIS = process.env.TRAVIS ? JSON.parse(process.env.TRAVIS) : false;

if (TRAVIS) {
  console.log('TRAVIS ode (will fail on error)');
  plugins.push(new webpack.NoErrorsPlugin());
}

const config = {
  bail: TRAVIS,
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 10000,
    contentBase: __dirname + '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;
