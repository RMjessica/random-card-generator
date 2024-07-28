const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const port = 3000;

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // Note: Source maps should typically have a unique filename based on the entry point
    sourceMapFilename: '[name].js.map'
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'dist'), // Use 'dist' instead of 'public'
    port: port,
    host: 'localhost',
    open: true,
    client: {
      logging: 'info',
      overlay: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        }
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
          options: {}
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
};
