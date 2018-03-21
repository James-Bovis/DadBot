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
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');


// Compiles the SCSS sheets code into CSS in SRC
gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Copies the font files into dist/fonts
gulp.task('copy-fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

// Goes though all the CSS files in SRC/CSS and strips out anything thats not being used
gulp.task('uncss', function () {
  // Go through every CSS file EXCEPT the fbmessenger.css file
  return gulp.src(['src/css/*.css', '!src/css/fbmessenger.css'])
    .pipe(uncss({
        html: ['src/index.html'],
    }))
    .pipe(gulp.dest('src/css/uncss/'));
});

gulp.task('copy-css', function() {
  return gulp.src('src/css/fbmessenger.css')
  .pipe(gulp.dest('src/css/uncss'))
})

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

// Concentrates the link and srcipt files in index.html and outputs to a single file
gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

// Image compressor
gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
});

// Deletes the dist folder
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// Main Gulp Task
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})

// Takes the files from src/css/uncss and creates dadbot.css in dist
gulp.task('concat', function() {
  return gulp.src('src/css/uncss/*.css')
    .pipe(concat('dadbot.css'))
    .pipe(gulp.dest('./dist/css/'));
});

// Runs the entire build process to create a finished dist folder
gulp.task('build', function (callback) {
  runSequence('clean:dist', 'sass', 'uncss', 
    ['useref', 'copy-css', 'copy-fonts', 'images'],
    'concat')
})

