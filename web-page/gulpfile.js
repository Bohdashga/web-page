const gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


//додаткові плагіни Gulp
const
    browserSync = require('browser-sync').create(),
    sass = require ('gulp-sass'), //конвертує SASS в CSS
    cssnano = require ('gulp-cssnano'), //мінімізація CSS
    autoprefixer = require ('gulp-autoprefixer'), //додавання префіксів в CSS для підтримки старих браузерів
    imagemin = require ('gulp-imagemin'), //стиснення зображень
    concat = require ('gulp-concat'), //об'єднання файлів - конкатенація
    uglify = require ('gulp-uglify'), //мінімізація javascript
    rename = require ('gulp-rename'); //перейменування файлів

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
//відслідковування змін у html та js файлах
gulp.task ('watch', function () {
    gulp.watch ( ['app/*.html'], () => console.log('HTML was changed'));
    gulp.watch ( ['app/js/*.js'], () => console.log('JS was changed'));
});

// в якості завдання за замовчуванням запустити сервер Browsersync і слідкувати за змінами у html/css/js файлах
gulp.task('default', function () {
    browserSync.init({
        watch: true,
        server: "./app"
    });
});