

var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var envify = require("envify/custom");
var source = require("vinyl-source-stream");
var del = require("del");
var webserver = require("gulp-webserver");
var runSequence = require("run-sequence");


gulp.task("scripts", function () {
    return browserify({
        entries: "./src/scripts/app.jsx",
        extensions: [".jsx"],
        debug: true
    })
    .transform(babelify, { presets: ["es2015", "react"] })
    .transform(envify({APP_ENV: process.env.APP_ENV}))
    .bundle()
    .pipe(source("scripts/bundle.js"))
    .pipe(gulp.dest("build"));
});

gulp.task("html", function() {
    return gulp.src(["./src/*.html", "./src/favicon.ico"])
        .pipe(gulp.dest("build"));
});

gulp.task("css", function() {
    return gulp.src("./src/styles/**/*")
        .pipe(gulp.dest("build/styles"));
});

gulp.task("images", function() {
    return gulp.src("./src/images/*")
        .pipe(gulp.dest("build/images"));
});


gulp.task("clean", function() {
    del("build/*");
});

gulp.task("webserver", function() {
    return gulp.src(["build"])
        .pipe(webserver({
            host: "0.0.0.0",
            port: process.env.PORT || 3000,
            livereload: true,
            open: true,
            fallback: "index.html"
        }));
});

gulp.task("serve", function() {
    runSequence("build", "webserver");
    gulp.watch("./src/*.html", ["html"]);
    gulp.watch("./src/styles/*.css", ["css"]);
    gulp.watch(["./src/scripts/*.jsx",
        "./src/scripts/components/**/*.jsx",
        "./src/scripts/components/core/**/*.*"], ["scripts"]);
});

gulp.task("copy", ["html", "css", "images"]);
gulp.task("build", ["scripts", "copy"]);
