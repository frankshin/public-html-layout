const del = require('del');

del(['build']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});