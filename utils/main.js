const header = require('../commonTemplates/header.html');
const nav = require('../commonTemplates/nav.html');
const topbar = require('../commonTemplates/topbar.html');
const footer = require('../commonTemplates/footer.html');

// 后续改成路径map遍历获取，无需手动配置
const htmlconfig = {
    nav: nav,
    header: header,
    topbar: topbar,
    footer: footer
};
module.exports = htmlconfig;