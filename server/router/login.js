// 书写 登录 找回密码 上传交易密码  的回调
let jwt = require('jsonwebtoken');
let data = require('../controler/data');
query = require('../controler/mysql');

module.exports = {
	// 验证登录
    async login(req, res) {
    	// 接受前端登录发送的过来的手机号 密码
    	let mobile = req.body.mobile || req.query.mobile;
    	let password = req.body.password || req.query.password;
		
    	if(!mobile) {
    		res.json({
    			status: 501,
    			message: '请输入手机号'
    		})
    		return false;
    	}
    	if(!password) {
    		res.json({
    			status: 502,
    			message: '请输入密码'
    		})
    		return false
    	}
    	
    	let isUser = await data.login([mobile, password]);
    	if(isUser){
    		// 获取token
            // sign(加密数据{}, 加密密钥, token存储时间{}) 加密用户名
            let token = jwt.sign({
                mobile: mobile,
            }, 'jwt', {
                expiresIn: 60*60*1    //存储时间ms
            })

            res.json({
                status: 200,
                data: {
                    token,
                    userInfo: isUser
                }
            })
    	}else{
    		res.json({
				status: 503,
				message: '用户不存在'
			})
    	}
    },
	
	forget(req, res) {}
}