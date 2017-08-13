const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDER_LIBS = [
  'react',
  'react-dom',
  // 'react-input-range',
  'react-redux',
  'react-router-dom',
  'redux',
  // 'redux-form',
  'redux-thunk',
];

module.exports = {
  entry: {
    bundle: './src/index.tsx',
    vendor: VENDER_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader",
          }
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: [
          {
            loader: "source-map-loader",
          }
        ],
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    // hot: true,
    // inline: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
