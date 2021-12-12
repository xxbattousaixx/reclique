const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
  
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = MiniCssExtractPlugin.loader;


module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',

  plugins: [
   
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'plugin.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })


    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
},
  resolve: {
    extensions: ['.ts', '.js','.css']
  },
  module: {
    rules: [
      
    {
      test: /.(ts|tsx)?$/,
      use: {loader: 'ts-loader',
      options: {
                compilerOptions: {
                  noEmit: false,
                                  },},
    }},  {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,

                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
       
            
    ],
  },
  
  resolve: {
    extensions: ['.tsx', '.ts', '.js','.scss', '.css'],
  },
  output: {
    filename: './dist/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};