let query = require('./mysql');

module.exports = {
	async login(data) {
		console.log(data);
		let sql = "select * from user where mobile=? and password=?";
		let result = await query(sql, data);
		if(result.length > 0) {
			return result[0];
		}else{
			return false;
		}
	}
}