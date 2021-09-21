const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlReplace = require("gulp-html-replace");
const gulpif = require("gulp-if");
const htmlmin = require("gulp-htmlmin");
const imgRetina = require("gulp-responsive-imgz-ignore");
const config = require("../config");

function html() {
	return gulp.src(config.paths.src.html)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(fileInclude({ prefix: "@", basepath: "@file" }))
		.pipe(gulpif(config.isProd, htmlReplace({
			"css-root": "assets/css/root.min.css",
			css: "assets/css/style.min.css",
			"js-vendors": "<script src='assets/js/vendors.min.js' defer='defer'></script>",
			js: "<script src='assets/js/main.min.js' defer='defer'></script>",
		})))
		.pipe(imgRetina(config.retinaOptions))
		.pipe(gulpif(config.isProd, htmlmin({
			collapseWhitespace: true,
			removeComments: true,
		})))
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.html), gulp.dest(config.paths.build.html)));
}

module.exports = html;
