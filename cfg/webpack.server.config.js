const {DefinePlugin} = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css?$/;

module.exports = {
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              onlyLocals: true
            }
          },
        ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [path.join(__dirname, "src/assets")],
        loader: "file-loader?name=assets/[name].[ext]"
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader']
      }
    ]
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`}),
    new DefinePlugin({'process.env.SECRET': `'${process.env.SECRET}'`}),
    new DefinePlugin({'process.env.REDIRECT_URI': `'${process.env.REDIRECT_URI}'`}),
  ]
};
