const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpif = require("gulp-if");
const newer = require("gulp-newer");
// const fonter = require("gulp-fonter");
// const ttf2woff = require("gulp-ttf2woff");
// const ttf2woff2 = require("gulp-ttf2woff2");
const config = require("../config");

function fonts() {
	return gulp.src(config.paths.src.fonts)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(gulpif(config.isProd, newer(config.paths.dist.fonts), newer(config.paths.build.fonts)))
		// .pipe(fonter({
		// 	formats: ["ttf"],
		// }))
		// .pipe(ttf2woff())
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.fonts), gulp.dest(config.paths.build.fonts)));
	// return gulp.src(`${config.paths.src.fonts}`)
	// 	.pipe(ttf2woff2())
	// 	.pipe(gulpif(config.isProd, gulp.dest(`${config.paths.dist.fonts}`), gulp.dest(`${config.paths.build.fonts}`)));
}

module.exports = fonts;
