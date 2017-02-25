const path = require('path');
const traversdir = require('traversdir');

const test_path = path.join(__dirname,'../templateSource');
const dir_object = traversdir(test_path);
const folder_list = dir_object._dirs;
module.exports = folder_list;