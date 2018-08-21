let gulp = require("gulp");
let sass = require("gulp-sass");
//使用gulp
gulp.task('compileSass',function(){
    // 执行任务时，会执行这里的代码

    // 在此把sass编译成css
    // 2.找出sass文件
    gulp.src(['./src/sass/*.scss']) //返回一个文件流

    // 编译scss->css
    .pipe(sass({outputStyle:'compact'}).on('error', sass.logError)) // 得到css文件流

    
    // 输出到硬盘
    .pipe(gulp.dest('./src/css/'))
});

gulp.task('autoSass',function(){
    gulp.watch('./src/sass/*.scss');
})