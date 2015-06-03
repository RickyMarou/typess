
var gulp = require('gulp');
var typescript = require('gulp-typescript');
var nodemon = require('gulp-nodemon');

gulp.task('compile', function() {
	gulp.src(['src/**/*.ts'])
		.pipe(typescript({
      module: "commonjs"
    }))
		.pipe(gulp.dest('app/'))
});

gulp.task('start', function () {
  nodemon({
    script: 'app/app.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['compile']);
});

gulp.task('default', ['watch']);