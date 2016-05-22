config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: 'source-map',
  resolve: {
    extentions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

module.exports = config;
