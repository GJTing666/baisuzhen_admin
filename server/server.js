let express = require('express')

let app = express()

let bodyParser = require('body-parser')

let parserJson = bodyParser.json()

let parserUrlencoded = bodyParser.urlencoded({
    extended: false
})

let router = require('./router')

// 解析post请求的参数 解析出来放到req.body中
app.use(parserJson)

app.use(parserUrlencoded)

app.all('*', function (req, res, next) {
    // 解决跨域
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
    // 继续往下走
    next();
})

app.post('/login', router.login)

app.listen(3000, function(){
    console.log('port: 3000')
})