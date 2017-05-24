'use strict'

module.exports = {
  paths: function(paths, isDevelopment) {
    return paths
  },
  webpack: function(webpackConfig, isDevelopment) {
    // modify webpack config here
    const config = Object.assign({}, webpackConfig)

    // return the modified version
    return config
  },
}
