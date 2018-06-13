const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
      filejs: './ok.js',
      filecss: './testcss.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: 'css-loader'
       })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('site.css'),
  ]
}




//
// module.exports = {
//   entry: {
//       filejs: './ok.js',
//       filecss: './testcss.js'
//   },
//   output: {
//     filename: '[name].js',
//     path: __dirname + '/dist'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           { loader: 'style-loader' },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true
//             }
//           }
//         ]
//       }
//     ]
//   }
// }
