const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpif = require("gulp-if");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const config = require("../config");

function media() {
	return gulp.src(config.paths.src.media)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(gulpif(config.isProd, newer(config.paths.dist.media), newer(config.paths.build.media)))
		.pipe(gulpif(config.isProd, imagemin([
			imagemin.mozjpeg({ quality: 80 }),
			pngquant({ quality: [0.8, 0.9] }),
		])))
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.media), gulp.dest(config.paths.build.media)));
}

module.exports = media;
