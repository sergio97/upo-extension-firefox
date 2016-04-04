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
  });

});

// compile Protocol Buffers files. Requites protoc to be availabe in PATH
gulp.task("pb", function() {
  // protoc --js_out=binary:./build/ *.proto
  var process = spawn("protoc", ["--js_out=import_style=commonjs,binary:./../data/pb/", "upoopu.proto"], {detached: false, cwd: "pb_messages"});
  process.on("error", function(err) {
    console.log("ERROR in process: " + err);
  });
  process.on("close", function(code) {
    console.log("Process exited with code " + code);
  });

});


gulp.task("default", ["run"]);
