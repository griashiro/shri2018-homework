var gulp = require('gulp');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');

gulp.task('postcss', function () {
    var plugins = [
      autoprefixer({browsers: ['last 1 version']}),
      nested
    ];
    return gulp.src('src/style.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/style.css', ['postcss']);
});
