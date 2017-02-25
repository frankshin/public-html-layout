/**
 * @Author:xudengwei
 * @contact:xudengwei.com
 * @2017-2-18-15:03
 */
const del = require('del');

del(['publish/html']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});