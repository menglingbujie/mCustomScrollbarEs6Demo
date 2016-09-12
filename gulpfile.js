var gulp = require("gulp");
var babel = require("gulp-babel");
var es2017 = require("babel-preset-es2015");
var webpack = require("webpack-stream");
var browsersync = require("browser-sync");
gulp.task("server",function(){
  browsersync.init({
    server:{
      baseDir:"./"
    }
  })
})
gulp.task("webpack",function(){
  return gulp.src("./build/*.js")
  .pipe(webpack({
    entry:{
      "libs":["jquery","malihu-custom-scrollbar-plugin"],
      "main":"./build/main.js",
    },
    output:{
      filename:"[name].js"
    },
    module:{
      loaders:[
        // {test:require.resolve("jquery"),loader:"expose?jQuery"},
        {test:/jquery-mousewheel/,loader:"imports?define=>false&this=>window"},
        {test:/malihu-custom-scrollbar-plugin/,loader:"imports?define=>false&this=>window"}
      ]
    },
  }))
  .pipe(gulp.dest("./dist"));
})
gulp.task("es6",function(){
  return gulp.src("./js/*.es6")
    .pipe(babel({presets:[es2017]}))
    .pipe(gulp.dest("./build"));
});

gulp.task("watch",function(){
  gulp.watch("./js/*.es6",["es6","webpack",browsersync.reload]);
});
gulp.task("default",["es6"],function(){
  // gulp.start("es6");
  gulp.start("webpack","watch","server");
  // gulp.start("es6","webpack");
});
