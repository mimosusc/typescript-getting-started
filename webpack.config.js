module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: 'index.js',
    path: __dirname + /dist/
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', 'js']
  }
}
