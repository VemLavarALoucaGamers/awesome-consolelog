module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/lib`,
    filename: 'index.js',
    library: '@vemlavaraloucagamers/awesome-consolelog',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};