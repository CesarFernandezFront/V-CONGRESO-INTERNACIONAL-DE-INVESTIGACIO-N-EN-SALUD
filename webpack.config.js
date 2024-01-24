const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/, 
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader' 
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    })
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin() 
    ]
    // minimize: true,
    // minimizer: [
    //   new CssMinimizerPlugin(),
    // ]
  }

}
