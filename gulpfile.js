const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      less = require('gulp-less'),
      ngAnnotate = require('gulp-ng-annotate'),
      rename = require('gulp-rename'),
      sourcemaps = require('gulp-sourcemaps'),
      templateCache = require('gulp-angular-templatecache'),
      uglify = require('gulp-uglify');

gulp.task('build', function() {
  gulp.src(['./static/app/js/app.js', './static/app/**/*.js', '!./static/app/js/main.js', '!./static/app/js/vendor/**/*.*', '!./static/app/**/*.spec.js'])
    .pipe(sourcemaps.init())
      .pipe(ngAnnotate())
      .pipe(concat('calendar.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./static/dist/'));
});

gulp.task('compile-templates', function() {
  gulp.src('./static/**/*.html')
    .pipe(templateCache({root: 'static/', module: 'calendar.templates'}))
    .pipe(gulp.dest('./static/dist'));
});

gulp.task('less', function() {
  gulp.src('./static/app/less/main.less')
    .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
      }))
      .pipe(rename('style.css'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./static/css/'));
});

gulp.task('default', function() {
  gulp.watch(['./static/app/**/*.js', '!./static/app/**/*.spec.js', '!./static/app/**/notifications.directive.js', '!./static/app/**/staticAPI.service.js', './static/app/**/*.less'], ['less', 'build', 'compile-templates']);
});
