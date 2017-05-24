# Extensible React Scripts

[![GitHub version](https://badge.fury.io/gh/brunolemos%2Fextensible-react-scripts.svg)](https://badge.fury.io/gh/brunolemos%2Fextensible-react-scripts)

## Why?

The official [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts)  that is included in [Create React App](https://github.com/facebookincubator/create-react-app) does not allow any custom webpack configuration, which leads to people using more `eject` than we wanted to.

### Solution

Allow users to extend webpack configuration.

### Usage

#### New projects

```shell
create-react-app APP_NAME_HERE --scripts-version extensible-react-scripts
```

Edit the `cra.config.js` file generated at the root of the project.

#### Existing projects

- `yarn remove react-scripts`
- `yarn add --dev extensible-react-scripts`
- Create a file named `cra.config.js` at the root of the project (outside `src` folder) exporting a function like below:



##### cra.config.js example

```js
module.exports = {
  webpack: function(webpackConfig, { isDevelopment }) {
    // modify webpack config here
    const config = Object.assign({}, webpackConfig)

    // return the modified version
    return config
  },
}
```

That's it!

## Available configurations

| Config | Format | Return type |
| ------ | ------ | ---- |
| [paths](config/paths.js#L52-L66)  | `function(paths, { resolvePath, isDevelopment })` | Object |
| [webpack](config/webpack.config.dev.js#L38)  | `function(webpackConfig, { isDevelopment })` | Object |

## Versioning

The version will be the same of the official `react-scripts`. Check the badge at the top of this file.

## Inspired by

[configurable-react-scripts](https://github.com/svrcekmichal/configurable-react-scripts) by [@svrcekmichal](https://github.com/svrcekmichal)

## Maintainer

Bruno Lemos ([@brunolemos](https://twitter.com/brunolemos) on twitter)
