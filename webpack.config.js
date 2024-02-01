const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },

  devServer: {
    // contentBase
    static : {
      directory : path.join(__dirname, "dist/")
    },
    port: 3000,
    // publicPath
    devMiddleware:{
       publicPath: "https://localhost:3000/dist/",
    }
    // hotOnly
    // hot: "only", // hot:true
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
      },
      // {
      //   loader: 'file-loader',
      //   options: {
      //     outputPath: 'img',
      //     publicPath: '/img',
      //   },
      // },  
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    })
  ],

  optimization: {
    // minimizer: [
    //   new CssMinimizerPlugin() 
    // ]
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ]
  }

}
