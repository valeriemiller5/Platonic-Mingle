/*eslint no-console: 0 */
const fs = require('fs');

fs.symlink('../../shared', './client/src/shared', 'dir', function(err) {
  if (err) {
    console.log(
      'Unable to create symbolic link, please verify a symlink exists at ./client/src/shared that links to ../../shared'
    );
  } else {
    console.log(
      'Created symlink at ./client/src/shared that links to ../../shared'
    );
  }
});
