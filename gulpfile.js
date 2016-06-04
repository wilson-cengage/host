var gulp = require('gulp-param')(require('gulp'), process.argv);
var del = require('del');

gulp.task('prebuild', function(packageName) {
    console.log(`gulp prebuild packageName: ${packageName}`);

    del([
        'dist',
        'components',
        'build'
    ]).then(paths => {
        // component-registry localhost setup
        gulp.src([`node_modules/component-registry/client/__adapters/**`])
            .pipe(gulp.dest(`components/__adapters/`));

        // copy component3-package1, component3-package2 to components/ for local components loading (fake component registry)
        gulp.src([`node_modules/component3-package1/dist/**`])
            .pipe(gulp.dest(`components/component3-package1/`));

        gulp.src([`node_modules/component3-package2/dist/**`])
            .pipe(gulp.dest(`components/component3-package2/`));
    });
});


gulp.task('postbuild', function(packageName) {

    console.log(`gulp postbuild packageName: ${packageName}`);

    gulp.src([`build/${packageName}/**`]).pipe(gulp.dest(`dist`));
});