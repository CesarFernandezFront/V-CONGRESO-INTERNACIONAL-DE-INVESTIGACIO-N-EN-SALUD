// const path = require('path');

// module.exports = {
//   output: {
//     path: path.resolve(__dirname, 'dist/js'),
//     filename: 'bundle.js'
//   },
//   entry: {
//     main: './src/app.js'
//   }
// }



// module.exports = {
//   module: {
//     rules: [
//       { 
//         test: /\.js$/, 
//         exclude: /node_modules/, 
//         loader: "babel-loader" 
//       }
//     ]
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist/js'),
//     filename: 'bundle.js'
//   },
//   entry: {
//     main: './src/app.js'
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     publicPath: '/js/'
//   }
// }


const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      }
    ]
  }
};
