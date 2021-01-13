const crypto = require('crypto');

function generateSHA1() {
	var current_date = (new Date()).valueOf().toString();
	var random = Math.random().toString();
	let val = crypto.createHash('sha1').update(current_date + random).digest('hex');
	console.log(val);
}

generateSHA1();