const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,
  entry: {
    scripts: './src/index.js',
  },
  output: {
    filename: 'js/build.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext][query]',
    clean: true,
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.(png|svg|webp|jpg|jpeg|gif|json)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
      {
        test: /\.pug$/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //     presets: ['@babel/preset-env']
          // }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: "./src/images/", to: "images"},
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/index.pug",
      filename: "home.html"
    }),
  ],
}