const gulp = require("gulp");
const path = require("path");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpif = require("gulp-if");
const newer = require("gulp-newer");
const svgmin = require("gulp-svgmin");
const cheerio = require("gulp-cheerio");
const gulpReplace = require("gulp-replace");
const sprite = require("gulp-svg-sprite");
const config = require("../config");

function svgSprite() {
	return gulp.src("**/*.svg", { cwd: config.paths.src.svg })
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(gulpif(config.isProd, newer(config.paths.dist.svg), newer(config.paths.build.svg)))
		.pipe(gulpif(config.isProd, svgmin({
			js2svg: {
				pretty: true,
			},
		})))
		.pipe(cheerio({
			run($) {
				$("[fill]").removeAttr("fill");
				$("[stroke]").removeAttr("stroke");
				$("[style]").removeAttr("style");
			},
			parserOptions: { xmlMode: true },
		}))
		.pipe(gulpReplace(">", ">"))
		.pipe(sprite({
			shape: {
				id: {
					generator(name) {
						return path.basename(name, ".svg");
					},
				},
			},
			mode: {
				symbol: {
					sprite: "../sprite.svg",
					render: {
						css: true,
					},
				},
			},
		}))
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.svg), gulp.dest(config.paths.build.svg)));
}

module.exports = svgSprite;
