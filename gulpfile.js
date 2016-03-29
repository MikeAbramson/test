// vars

var gulp = require('gulp'); // importing gulp node package
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

// tasks

  // minifies scripts

gulp.task('scripts', function() { // where the task name goes like minify to minify js. dont really need to type default, could just be gulp
	/*console.log('hello world'); */
	gulp.src('js/jquery-1.10.2.js') // get the files
	.pipe(uglify()) // minimize the files
	.pipe(gulp.dest('build/js')); // save them to minjs
});

  // styles task

gulp.task('styles', function () {
  return sass('scss/style.scss', {
    sourcemap: true
  })
    .on('error', sass.logError)
    .pipe(gulp.dest('css/'));
});


  // watch task
gulp.task('watch', function() {
  gulp.watch('js/jquery-1.10.2.js', ['scripts']); // what we are watching. watch is a built in function of gulp
  gulp.watch('scss/style.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']); // so i can just type gulp in command line and it will do  bunch of tasks



































