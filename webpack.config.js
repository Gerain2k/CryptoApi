const path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname), 
  entry: 
  {
    main: [
      './src/js/main.js',
      './src/scss/main.scss'
    ]
  },
  output: 
  {
    path: path.resolve(__dirname, 'public/'),
    filename: './js/[name].js'
  },
  module: 
  {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }, 
      {
        test:/\.(s*)css$/, 
        use: ExtractTextPlugin.extract({ 
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
          publicPath: '../',
          //publicPath: path.resolve(__dirname,'public/css'),
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css', {
      allChunks: true
    }),
  ],
  mode: 'development',
  devtool: 'inline-source-map'
};