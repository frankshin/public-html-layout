const path = require('path');
const fs = require('fs');

const getTemplatesList = (dirName) => {
  const templatePath = path.join(__dirname, '../', dirName); // 模版页面目录的绝对路径
  const pagesArray = fs.readdirSync(templatePath);
  return pagesArray || [];
}

module.exports = {
  getTemplatesList
}