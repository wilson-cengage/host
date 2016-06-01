var gulp = require('gulp-param')(require('gulp'), process.argv);
var del = require('del');

gulp.task('prebuild', function(packageName) {
    console.log(`gulp prebuild packageName: ${packageName}`);

    del([
        'dist',
        'components',
        'static'
    ]).then(paths => {
        // copy component3-package1, component3-package2 to components/ for local components loading (fake component registry)
        gulp.src([`node_modules/component3-package1/dist/**`])
            .pipe(gulp.dest(`components/component3-package1/`));

        gulp.src([`node_modules/component3-package2/dist/**`])
            .pipe(gulp.dest(`components/component3-package2/`));
    });
});


gulp.task('postbuild', function(packageName) {

    console.log(`gulp postbuild packageName: ${packageName}`);


    // copy react adapters over
    gulp.src([`client/*adapter.js`]).pipe(gulp.dest(`static`));



//    gulp.src([`static/${packageName}/**`]).pipe(gulp.dest(`dist`));


});