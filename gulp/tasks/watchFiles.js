const gulp = require("gulp");
const browserSync = require("browser-sync");
const html = require("./html");
const styles = require("./styles");
const scripts = require("./scripts");
const fonts = require("./fonts");
const media = require("./media");
const svgSprite = require("./svgSprite");
const config = require("../config");

function watchFiles() {
	browserSync({
		server: {
			baseDir: config.isProd ? config.paths.dist.server : config.paths.build.server,
			index: config.isProd ? config.paths.dist.serverIndex : config.paths.build.serverIndex,
			reloadDelay: 300,
		},
		tunnel: false,
		host: "localhost",
		port: config.isProd ? 3002 : 3000,
		logPrefix: config.isProd ? "prod" : "dev",
		directory: true,
	});

	function reload(done) {
		browserSync.reload();
		done();
	}

	gulp.watch(config.paths.watch.html).on("change", gulp.series(html, reload));
	gulp.watch(config.paths.watch.styles, gulp.series(styles));
	gulp.watch(config.paths.watch.js, gulp.series(scripts, reload));
	gulp.watch(config.paths.watch.fonts, gulp.series(fonts, reload));
	gulp.watch(config.paths.watch.media, gulp.series(gulp.parallel(media, svgSprite), reload));
}

module.exports = watchFiles;
