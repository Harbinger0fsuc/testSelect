const config = require("../config");

function toProd(done) {
	config.isProd = true;
	done();
}

module.exports = toProd;
