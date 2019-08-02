'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const pkg = require('./package.json');
const banners = require('./config/banners');
const jestConfig = require('./config/jest');
const jsdocConfig = require('./config/jsdoc');

// build
// --
gulp.task('clean', () => {
	return gulp
		.src(['coverage', 'dist', 'docs'], { allowEmpty: true, read: false })
		.pipe($.clean({ force: true }));
});

gulp.task('compile', () => {
	return gulp
		.src('./src/Core.js')
		.pipe(
			$.preprocess({
				context: { NODE_ENV: 'production' }
			})
		)
		.pipe($.rename(`${pkg.name}.js`))
		.pipe($.stripComments())
		.pipe($.babel())
		.pipe($.header(banners.max))
		.pipe(gulp.dest('./dist'));
});

gulp.task('uglify', () => {
	return gulp
		.src(`./dist/${pkg.name}.js`)
		.pipe($.uglify())
		.pipe($.header(banners.min))
		.pipe($.rename(`${pkg.name}.min.js`))
		.pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('clean', 'compile', 'uglify'));

// continuous build
// --
gulp.task(
	'watch',
	gulp.series('build', () => {
		gulp.watch(['./src/**/*.js', '!./src/**/*.test.js'], gulp.series('build'));
	})
);

// run unit tests (requires manual build/'dist' output)
// --
gulp.task('clean:coverage', () => {
	return gulp
		.src('./coverage', { allowEmpty: true, read: false })
		.pipe($.clean({ force: true }));
});

gulp.task(
	'test',
	gulp.series('clean:coverage', () => {
		return gulp.src('./dist/grindstone.js').pipe($.jest.default(jestConfig));
	})
);

// generate documentation
// --
gulp.task('clean:jsdoc', () => {
	return gulp
		.src('./docs', { allowEmpty: true, read: false })
		.pipe($.clean({ force: true }));
});

gulp.task(
	'jsdoc',
	gulp.series('clean:jsdoc', () => {
		return gulp
			.src(['./test/*.js', './config/*.js', './src/**/*.js'])
			.pipe($.jsdoc3(jsdocConfig));
	})
);
