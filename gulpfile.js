var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
gutil = require('gulp-util')

// Compiles the sass code into css onto dist
gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('copy-css', function() {
  return gulp.src('src/css/**/*')
  .pipe(gulp.dest('dist/css'))
})

gulp.task('copy-fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('uncss', function () {
    return gulp.src('src/css/*.css')
        .pipe(uncss({
            html: ['src/index.html'],
            ignore: [/jsm/]
        }))
        .pipe(gulp.dest('./dist/css/'));
});

// Runs browsersync on src folder
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

// Watches CSS and JS files for changes and reloads browser
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload); 
  gulp.watch('src/js/**/*.js', browserSync.reload); 
});

// Concentrates JS files into minified output
gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('dist'))
});

// Image compressor
gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// Main Gulp Task
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', 'uncss', 
    ['sass', 'copy-css', 'uncss', 'copy-fonts', 'useref', 'images'],
    callback
  )
})