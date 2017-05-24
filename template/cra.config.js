'use strict'

module.exports = {
  paths: (paths, isDevelopment) => {
    const sourcesToCompile = paths.sourcesToCompile
    sourcesToCompile.push('example/lib/to/compile/')

    return Object.assign({}, paths, { sourcesToCompile })
  },

  webpack: function(webpackConfig, isDevelopment) {
    // modify webpack config here
    const config = Object.assign({}, webpackConfig)

    // return the modified version
    return config
  },
}
