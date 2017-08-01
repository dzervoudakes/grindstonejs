const gulp = require('gulp');
const pkg = require('./package.json');
const jsDocConf = require('./jsdoc.json');
const $ = require('gulp-load-plugins')();

// banners for output files
const banners = {
	max: [
		'/**',
		` * Grindstone JavaScript Library v${pkg.version}`,
		` * ${pkg.repository.url}`,
		' * ',
		` * Copyright (c) 2014, ${new Date().getFullYear()} ${pkg.author.name} and contributors`,
		' * Released under the MIT license',
		` * ${pkg.repository.url}/blob/master/LICENSE`,
		' */',
		'\n'
	].join('\n'),
	min: [
		`/* Grindstone JavaScript Library v${pkg.version} |`,
		`Copyright (c) 2014, ${new Date().getFullYear()} ${pkg.author.name} and contributors |`,
		`${pkg.repository.url}/blob/master/LICENSE */\n`
	].join(' ')
};

// clean output directory
gulp.task('clean', () => {
	return gulp.src('dist', { read: false })
		.pipe($.clean({ force: true }));
});

// concatenate and transpile all the things
gulp.task('concat', ['clean'], () => {
	return gulp.src(['./src/templates/Intro.js', './src/Core.js', './src/modules/*.js', './src/templates/Outro.js'])
		.pipe($.concat(`${pkg.name}-v${pkg.version}.js`))
		.pipe($.babel())
		.pipe($.header(banners.max))
		.pipe(gulp.dest('./dist'));
});

// uglify it
gulp.task('uglify', ['concat'], () => {
	return gulp.src(`./dist/${pkg.name}-v${pkg.version}.js`)
		.pipe($.uglify())
		.pipe($.header(banners.min))
		.pipe($.rename(`${pkg.name}-v${pkg.version}.min.js`))
		.pipe(gulp.dest('./dist'));
});

// clean documentation
gulp.task('clean-jsdoc', () => {
	return gulp.src('./documentation', { read: false })
		.pipe($.clean({ force: true }));
});

// generate documentation
gulp.task('jsdoc', ['clean-jsdoc'], () => {
	return gulp.src(`./dist/${pkg.name}-v${pkg.version}.js`)
		.pipe($.jsdoc3(jsDocConf));
});

// watch for changes and execute the 'build' task
gulp.task('watch', () => {
	gulp.watch('./src/**/*.js', () => {
		gulp.run('build');
	});
});

// build
gulp.task('build', ['clean', 'concat', 'uglify']);