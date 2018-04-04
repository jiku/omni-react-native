
var path = require('path');
var blacklist = require('metro/src/blacklist');

var config = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native')
  },
  getBlacklistRE() {
    return blacklist([
      /[/\\]Users[/\\]test[/\\]Documents[/\\]dev[/\\]Projects[/\\]jiku[/\\]Portal[/\\]base[/\\]src[/\\]node_modules[/\\]react-native[/\\].*/
    ]);
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),

      // Include your forked package as a new root.
      path.resolve('/Users/test/Documents/dev/Projects/jiku/Portal/base/src')
    ];
  }
};
module.exports = config;
  