var gulp = require("gulp");
var jshint = require("gulp-jshint");
var spawn = require("child_process").spawn;

gulp.task("test", function() {
  console.log("NOT IMPLEMENTED YET");
});

gulp.task("lint", function() {
  return gulp.src(["./data/*.js", "./data/parsers/*.js"])
    .pipe(jshint({esversion: 6}))
    .pipe(jshint.reporter("default"));
});

gulp.task("run", function() {
  var process = spawn("jpm", ["run", "-b", "/usr/bin/firefox", "--binary-args", "--jsconsole"], {detached: false});
  process.on("close", function(code) {
    console.log("Process exited with code " + code);
  })

});

gulp.task("default", ["run"]);

