// Include gulp
var gulp = require('gulp');
var angularProtractor = require('gulp-angular-protractor');


// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('protractor', function(callback) {
    gulp.src(['./seleniumtests/pinterest*.js'])
        .pipe(angularProtractor({
            'configFile': 'conf.js',
            'debug': false,
//            'args': ['--baseUrl', 'http://127.0.0.1:8000'],
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});

// Default Task
gulp.task('default', ['protractor']);


