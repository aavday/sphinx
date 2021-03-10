const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const gulprename = require('gulp-rename');
const gulpjsminify = require('gulp-minify')
const autoprefixer = require('gulp-autoprefixer');

function style () {  
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css'))
}

function styleMin () {  
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(csso())
    .pipe(gulprename(function(path) {
        path.basename += ".min"
    }))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css'))
}

function jsMinify () {
    return gulp.src('./src/js/**/*.js')
    .pipe(gulpjsminify())
    .pipe(gulp.dest('./assets/js'))
}

function img () {
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/img'))
}

function watch () {
    gulp.watch('./src/scss/**/*.scss' , style);
    gulp.watch('./src/scss/**/*.scss' , styleMin);
    gulp.watch('./src/img/*' , img);
    gulp.watch('./src/js/**/*.js' , jsMinify);
}

exports.styleMin = styleMin;
exports.jsMinify = jsMinify;
exports.style = style;
exports.img = img;
exports.watch = watch;
