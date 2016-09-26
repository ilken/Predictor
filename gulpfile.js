var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('uglifyjs', function() {
  if(process.env.NODE_ENV === 'development'){
    gulp.src('src/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(uglify({ preserveComments: 'license' }))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('dist/js'));
  }
  else{
    gulp.src('src/js/*.js')
      .pipe(uglify({ preserveComments: 'license' }))
      .pipe(gulp.dest('dist/js'));
  }
});

gulp.task('uglifyjs-watch', function() {
  gulp.watch('src/js/*.js', ['uglifyjs']);
});

gulp.task('sass', function () {
  if(process.env.NODE_ENV === 'development'){
    gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'));
  }
  else{
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
  }
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('default', ['set-prod-node-env', 'sass', 'uglifyjs']);

gulp.task('dev', ['set-dev-node-env', 'sass', 'sass:watch', 'uglifyjs', 'uglifyjs-watch']);
