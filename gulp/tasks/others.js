const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpif = require("gulp-if");
const config = require("../config");

function others() {
	return gulp.src(config.paths.src.others)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.others), gulp.dest(config.paths.build.others)));
}

module.exports = others;
