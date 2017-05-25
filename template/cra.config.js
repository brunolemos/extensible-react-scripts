'use strict'

module.exports = {
  paths: (paths, { resolvePath, isDevelopment }) => {
    const sourcesToCompile = paths.sourcesToCompile.concat([
      resolvePath('../my/lib/to/compile/')
    ])

    return Object.assign({}, paths, { sourcesToCompile })
  },

  webpack: function(webpackConfig, { isDevelopment }) {
    // modify webpack config here
    const config = Object.assign({}, webpackConfig)

    // return the modified version
    return config
  },
}
