
// 封装数据库连接池

// 连接池封装
let mysql = require('mysql')

let config = require('../config');

let pool = mysql.createPool(config.mysql);
// sql 为String
// data 查询数据的参数
let query = function (sql,data) {

    // 返回promise 对象
    return new Promise(function (resolve, reject) {
        // getConnection 打开连接
        //connection  获取连接的数据
        // err 错误信息
        pool.getConnection(function (err, connection) {
            if (!err) {
                // sql 为sql语句
                // data sql 参数
                // error 查询错误的信息
                // result 查询结果
                connection.query(sql, data, function (error, result) {
                    if (!error) {
                        // resolve接收返回查询结果 存入resolve中
                        resolve(result)
                    } else {
                        // reject接收返回错误信息
                        reject(error)
                    }
                    connection.release()
                })
            }else{
                reject(err)
            }
        })
    })
}
// 抛出query
module.exports = query;