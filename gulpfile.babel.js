const gulp = require("gulp");
const toProd = require("./gulp/tasks/toProd");
const clean = require("./gulp/tasks/clean");
const html = require("./gulp/tasks/html");
const styles = require("./gulp/tasks/styles");
const scripts = require("./gulp/tasks/scripts");
const fonts = require("./gulp/tasks/fonts");
const others = require("./gulp/tasks/others");
const media = require("./gulp/tasks/media");
const watchFiles = require("./gulp/tasks/watchFiles");
const svgSprite = require("./gulp/tasks/svgSprite");

exports.default = gulp.series(
	clean,
	html,
	scripts,
	styles,
	gulp.parallel(fonts, others),
	gulp.parallel(watchFiles, media, svgSprite),
);

exports.dist = gulp.series(
	toProd,
	clean,
	html,
	scripts,
	styles,
	gulp.parallel(fonts, others),
	gulp.parallel(watchFiles, media, svgSprite),
);
