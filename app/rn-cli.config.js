const path = require('path');

// const blacklist = require('metro/src/blacklist');

// const LINKED_LIBS = [path.resolve(process.env.HOME, './shared')];
module.exports = {
  // watchFolders: [path.resolve(__dirname, '../shared')],
  resolver: {
    extraNodeModules: {
      shared: path.resolve(__dirname, '../shared')
    }
  },
  projectRoot: path.resolve(__dirname),
  watchFolders: [path.resolve(__dirname, '../shared')]
};
