var gulp = require('gulp');
var connect = require('gulp-connect');
var compass = require('gulp-compass');
var concat = require('gulp-concat');

var bowerComponentsCSS = [
  'bower_components/bootstrap/dist/css/bootstrap.css'
];

var bowerComponentsJS = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-route/angular-route.js',
  'bower_components/d3/d3.js'
];

gulp.task('bower', function() {
  // CSS Dependencies
  gulp.src(bowerComponentsCSS)
  .pipe(concat('dependencies.css'))
  .pipe(gulp.dest('dist'));

  // JS Dependencies
  gulp.src(bowerComponentsJS)
  .pipe(concat('dependencies.js'))
  .pipe(gulp.dest('dist'));

});

gulp.task('styles', function() {
    gulp.src('src/styles/**/*.scss')
    .pipe(compass({
        config_file: './config.rb',
        css: 'dist',
        sass: 'src/styles'
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
    gulp.src('src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch([
        'dist/**/*'
    ], function(event) {
        return gulp.src(event.path)
            .pipe(connect.reload());
    });
    gulp.watch(['src/**/*.html'], ['copy']);
    gulp.watch(['src/styles/**/*.scss'], ['styles']);
    gulp.watch(['src/**/*.js'], ['scripts']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 7000,
        livereload: true
    });
});

gulp.task('default', ['bower', 'styles', 'scripts', 'copy', 'connect', 'watch']);
