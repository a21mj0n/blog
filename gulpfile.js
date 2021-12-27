const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCss = require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const autoPrefixer = require('gulp-autoprefixer')

const files = {
  get: {
    scss: './public/scss/*.scss',
    js: './public/js/*.js'
  },
  set: {
    css: './public/assets/css/',
    js: './public/assets/js/'
  },
}

function style() {
  return gulp.src([files.get.scss])
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(autoPrefixer())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(files.set.css))
    .pipe(browserSync.stream())
}

function js() {
  return gulp.src([files.get.js])
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest(files.set.js))
    .pipe(browserSync.stream());
}

gulp.task('dev', function () {
  browserSync.init({
    proxy: "http://localhost:5000"
  })
  gulp.watch([files.get.scss], style)
  gulp.watch([files.get.js], js)
})