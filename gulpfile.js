var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()
var runSequence = require('run-sequence')
var imagemin = require('gulp-imagemin')
var del = require('del')
var useref = require('gulp-useref')
var uglify = require('gulp-uglify')
var gulpIf = require('gulp-if')
var uncss = require('gulp-uncss')
var concat = require('gulp-concat')
var mjml = require('gulp-mjml')
var autoprefixer = require('gulp-autoprefixer')

// TASK LIST FOR BUILDING DIST VERSION

// Deletes the dist folder
gulp.task('clean:dist', function () {
  return del.sync('dist')
})

// Compiles the SCSS sheets code into CSS in SRC
gulp.task('sass', function () {
  return gulp.src('src/sass/*.+(scss|sass)')
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError)
    )
    .pipe(autoprefixer({}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

// Goes though all the CSS files in SRC/CSS and strips out anything thats not being used
gulp.task('uncss', function () {
  // Go through every CSS file EXCEPT the fbmessenger.css file
  return gulp.src(['src/css/*.css', '!src/css/fbmessenger.css'])
    .pipe(uncss({
      html: ['src/**/*.html']
    }))
    .pipe(gulp.dest('src/css/uncss/'))
})

// Concentrates the link and srcipt files in index.html and outputs to a single file
gulp.task('useref', function () {
  return gulp.src('src/**/*.html')
    .pipe(useref())
  // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
})

// Copies over the fbmessenger.css file into the uncss folder
// ready for the concat task
gulp.task('copy-css', function () {
  return gulp.src('src/css/fbmessenger.css')
    .pipe(gulp.dest('src/css/uncss'))
})

// Copies the font files into dist/fonts
gulp.task('copy-fonts', function () {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Image compressor
gulp.task('images', function () {
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
})

// Takes the files from src/css/uncss and creates dadbot.css in dist
gulp.task('concat', function () {
  return gulp.src('src/css/uncss/*.css')
    .pipe(concat('dadbot.css'))
    .pipe(gulp.dest('./dist/css/'))
})

// Runs the entire build process to create a finished dist folder
gulp.task('build', function (callback) {
  runSequence('clean:dist', 'sass', 'uncss',
    ['useref', 'copy-css', 'copy-fonts', 'images'],
    'concat')
})

// TASKS FOR RUNNING LOCAL BUILD

// Runs browsersync on src folder
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
})

gulp.task('mjml', function () {
  return gulp.src('src/emails/mjml/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('src/emails/html/'))
})

// Watches CSS and JS files for changes and reloads browser
gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('src/sass/**/*.+(scss|sass)', ['sass'])
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload)
  gulp.watch('src/js/**/*.js', browserSync.reload)
})

// Main Gulp Task
gulp.task('default', function (callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
  )
})
