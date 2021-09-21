const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpif = require("gulp-if");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");
const config = require("../config");

function styles() {
	return gulp.src(config.paths.src.style)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(gulpif(!config.isProd, sourcemaps.init()))
		.pipe(sass({ outputStyle: "expanded", includePaths: ["./node_modules"] }))
		.pipe(autoprefixer({ cascade: false }))
		.pipe(gulpif(config.isProd, gcmq()))
		.pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
		.pipe(gulpif(config.isProd, rename({ extname: ".min.css" })))
		.pipe(gulpif(!config.isProd, sourcemaps.write()))
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.css), gulp.dest(config.paths.build.css)))
		.pipe(browserSync.reload({stream: true}));
}

module.exports = styles;
