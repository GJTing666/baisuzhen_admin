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

app.get('/login', router.login)

app.listen(3000, function(){
    console.log('port: 3000')
})