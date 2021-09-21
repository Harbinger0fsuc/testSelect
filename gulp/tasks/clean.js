const del = require("del");
const config = require("../config");

function clean(resolve) {
	const filesToDelete = config.isProd ? config.paths.cleanProd : config.paths.clean;

	(async () => {
		const deletedFiled = await del(filesToDelete, { force: true });
	})();

	resolve();
}

module.exports = clean;
