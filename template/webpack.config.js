'use strict'

module.exports = function(webpackConfig, isDevelopment) {
  // modify webpack config here
  const config = Object.assign({}, webpackConfig)

  // return the modified version
  return config
}
