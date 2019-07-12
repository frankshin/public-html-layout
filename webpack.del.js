const del = require('del');

del(['publish/html']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});