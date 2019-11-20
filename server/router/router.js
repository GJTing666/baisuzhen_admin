// 所有请求回调的出口
let login = require('./login')

// 合并路由对象
let router = Object.assign({}, login)

module.exports = router