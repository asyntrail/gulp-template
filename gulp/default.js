var gulp = require('gulp');
var runseq = require('run-sequence');
console.log('here you go')
gulp.task('default', function(){
    runseq(
        'copy',
        'sass',
        'server',
        'copy:watch',
        'sass:watch'
    );
});