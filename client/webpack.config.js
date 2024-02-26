const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Specify your backend server URL here
        changeOrigin: true,
        secure: false, // Set to false if your backend server doesn't support HTTPS
        logLevel: 'debug', // Optional: Set log level to debug for detailed proxy logs
        pathRewrite: { '^/api': '' }, // Optional: Rewrite the path if needed
        onProxyReq: function(proxyReq, req, res) {
          // Optional: Add custom logic to modify proxy request headers
        },
        onError: function(err, req, res) {
          // Optional: Add custom error handling logic
        }
      }
    }
  },
};
