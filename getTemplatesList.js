/**
 * nodejs abouts
 */
const path = require('path');
const fs = require('fs');

const templatePath = path.join(__dirname,'templateSource'); // 模版页面目录的绝对路径
const pagesArray = fs.readdirSync(templatePath);

module.exports = pagesArray;