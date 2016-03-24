// copyright Sergio Martins 2016
//

var self = require("sdk/self");
var panels = require("sdk/panel");
var pageMod = require("sdk/page-mod");
var { ToggleButton } = require('sdk/ui/button/toggle');

var config = require("./config");
var parsers = require("./parsers/parsers");


var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: "./icon.png",
  onChange: handleChange
});

var panel = panels.Panel({
  width: 180,
  height: 180,
  contentURL: "./icon-content.html",
  onHide: function() {
    button.state('window', {checked: false});
  }
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}




pageMod.PageMod({
  include: ["http://utopia-game.com/wol/game/*",
            "file:///*"],
  contentScriptFile: ["./lib/jquery-1.12.1.js",
                      "./page-listener.js"],
  attachTo: ["existing", "top"],
  onAttach: function(worker) {
    worker.port.on("page_body", function(body) {
      var preped_string = prepareStringForParsing(body);
      var parser = findParser(preped_string);
      if (!parser) {
        return null;
      }

      var parsed_data = parser.parse();
      console.log("Result of parsing:", parsed_data);
      // TODO: convert data to pb and enqueue
    });
  }
});




function prepareStringForParsing(body) {
  var result = body;

  // Ensure whitespace between tags
  // result = result.replace(/></g, "> <");

  // Fixed escpaed XHTML-style closing tags
  // result = result.replace(/\/>/g, "/>");

  // Replace non-breaking spaces with regular ones
  // result = result.replace(/&nbsp;/g, " ");

  // Replaces successive whitespace characters (tabs, newlines, etc)
  // with a single space
  result = result.replace(/\s+/g, " ");

  // Trim leading and trailing whitespace
  // result = result.replace(/^\s+|\s+$/g, "");

  return result;
}

function findParser(body, metadata) {
  // console.log("Checking match against this string:");
  // console.log(body);

  var match = false;
  for (var [name, exp, is_xregex] of config.PAGE_IDENTIFIERS) {
    // console.log("Checking regex:", name);

    if (is_xregex) {
      //Check if this page matches an XRegExp
      throw "XRegExp is not implemented yet"
    } else {
      //Check if this page matches a normal RegExp
      match = exp.exec(body);
    }

    if (match) {
      // console.log("Regex matches:", name);

      // Instantiate the matching parser so we can extract data
      var parser_class = parsers.getParser(name);
      var parser = new parser_class(body, name, metadata);
      // console.log("Will use parser:", parser);
      return parser;
    }
  }
  return null;
}








// code for testing easily/lazily
var tabs = require("sdk/tabs");
tabs.open("file:///home/sergio/code/upo-extension-firefox/saved_pages/SelfSurvey.html");
// tabs.open("http://utopia-game.com");

console.log("extension code has finished initializing")
