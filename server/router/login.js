// 书写 登录 找回密码 上传交易密码  的回调
let data = require('../controler/data')
query = require('../controler/mysql');
let login = function(req, res) {
    console.log(req.query.user)
}

let forget = function() {}

module.exports = {
    login,
    forget
}