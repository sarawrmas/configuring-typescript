const path = require('path');

module.exports = {
  // main file
  entry: './src/index.ts',
  // ensures development tools such as console.log are not removed
  mode: 'development',
  module: {
    // decide what to do with each file
    rules: [
      {
        test: /\.tsx?$/, // tsx only necessary for react projects
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // look for both typescript and javascript files
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    // output file name
    filename: 'bundle.js',
    // put output file in directory called bin
    path: path.resolve(__dirname, 'bin'),
  },
  // additional watch tool
  devServer: {
    // serve both public and binary directories
    static: [path.join(__dirname, 'public'), path.join(__dirname, 'bin')],
    port: 7777
  }
}