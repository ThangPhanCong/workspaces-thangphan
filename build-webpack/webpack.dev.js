const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
   
    module: {
          rules: [
            {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                presets: ['es2015', 'react']
              }
            }
          ]
        },
        plugins: [
          new webpack.ProvidePlugin({
            "React": "react",
          }),
          new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
        ],
};
