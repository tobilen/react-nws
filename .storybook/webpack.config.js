const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /.sass$/,
        loaders: ["style?sourceMap", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]", "sass"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
