// Include gulp
var gulp = require('gulp');
var angularProtractor = require('gulp-angular-protractor');

gulp.task('protractor', function(callback) {
    gulp.src(['./seleniumtests/pinterestviewertest.js'])
        .pipe(angularProtractor({
            'configFile': 'conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});

// Default Task
gulp.task('default', ['protractor']);


