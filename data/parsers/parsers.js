// put main code in here, such as findParser() and getParser()

// for now, put all parsers into this file as well.
// In the future, split each parser out into their own file

var config = require("./../config");


// TODO(Sergio): Clean all these up
// var selfData = null;
var selfData = ["My Prov Name", 1, 2];
var lastUtoTime = null;

var reCache = {};

var months = ["jan", "feb", "march", "april", "may", "june", "july"];
var utimeRegex = /([a-z]+) ([0-9]+) of YR([0-9]+)/i;
var ushortTimeRegex = /([a-z]+) ([0-9]+), YR([0-9]+)/i;

function hoursBetween(oldStamp, newStamp) {
  throw "Not Implemented Yet"
}

function get_matches(data, pattern, is_xregex) {
  // Takes a pattern (a compiled RegExp or XRegExp) and a string
  // to match against. Returns matches and match start/end.

  var res = null;
  if (is_xregex) {
    matches = XRegExp.exec(data, pattern);
  } else {
    matches = pattern.exec(data);
  }

  if (!matches) {
    return [null, 0, 0];
  }

  var start = data.indexOf(matches[0]);
  var end = start + matches[0].length + 1;
  return [matches, start, end];
}

function parseRuler(rulerString) {
  throw "Not Implemented Yet";
}

function utimeToInt(utime) {
  throw "Not Implemented Yet";
}

function ushortTimeToInt(utime) {
  throw "Not Implemented Yet";
}




class BaseParser {
  constructor(data, parser_name, metadata) {
    // console.log("Initializing base parser");
    if (typeof(metadata)=="undefined") {metadata = {};}

    this.data = data;
    this.parser_name = parser_name;
    this.metadata = metadata;

    this.full_data = data;
    this.used_data = "";
    this.start_data = data.length;
    this.end_data = 0;
    this.sequential = true;
    this.pb = null;
    this.header_format = null;
    this.get_count = 0
    this.parsed = null;

    if ("utime" in this.metadata) {
      var now = parseInt(new Date().valueOf() / 1000);
      lastUtoTime = [now, utimeToInt(this.metadata.utime)];
    }
    if ("hash" in this.metadata) {
      var [_, province, isl, kd] = this.metadata.hash.split(":");
      selfData = [province, parseInt(kd), parseInt(isl)];
    }
    if ("self" in this.metadata) {
      var meta_self = this.metadata.self;
      selfData = [meta_self.province, meta_self.kd, meta_self.isl];
    }

    // console.log("Finished initializing base parser");
  }

  get_multi(regex, data, formatter) {
    if (typeof(data)=="undefined") {
      data = this.data
    }
    if (typeof(formatter)=="undefined") {
      formatter = function(matches) {
        return matches.splice(1);
      }
    }

    var [compiled_regex, is_xregex] = config.expand_and_compile_regex(regex);
    var [matches, start, end] = get_matches(data, compiled_regex, is_xregex);
    if (!matches) {
      return [];
    }
    console.log("Found matches:", matches)
    return formatter(matches);
  }

  get(...args) {
    var matches = this.get_multi(...args);
    return matches[0]
  }

  get_target(search_string) {
    var matches = this.get_multi(search_string);
    var province = matches[0];
    var kd = matches[2];
    var isl = matches[3];

    return [province, kd, isl];
  }

  get_thievery_accuracy() {
    var accuracy = this.get("we have [percentage] confidence in the information");
    return parseInt(accuracy.replace("%", ""));
  }

  parse_basic_intel(target_string) {
    var result = {};
    result.is_self = this.parser_name.includes("self");

    if (result.is_self) {
      [result.province, result.kd, result.isl] = selfData;
    } else {
      [result.province, result.kd, result.isl] = this.get_target(target_string);

      result.accuracy = this.get_thievery_accuracy()

      // //TODO: use this data
      // var thieves_lost = this.get("We lost [number] thieves? in the operation");
      // thieves_lost = thieves_lost || 0;
    }
    return result;
  }

  header() {
    throw "Not Implemented Yet";
  }

  parse() {
    throw "parse() not implemented yet for parser: " + this.parser_name;
  }

  toPb(trust) {
    if (typeof(trust)=="undefined") {trust = 0;}
    // Original coco code:
    //
    // if not @pb then return null
    // data = @parse()
    // data["unix_time"] = (new Date().valueOf() * 0.001)|0
    // utime = @get("(([a-z]+) ([0-9]+), YR([0-9]+)) throne", 0, {data: @full_data})
    // if utime then data["uto_time"] = ns.ushortTimeToInt(utime)
    // if trust > 0 and trust <= 5 then data["trust"] = trust
    // return upoopu.tools.pb.buildEncoded(@pb, data)

    return null;
  }

  rewind() {
    throw "Rewind() was called. What even is this?"
  }

}






class SelfParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing SelfParser");
    super(data, parser_name, metadata);
  }
}

class SoTParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing SoTParser");
    super(data, parser_name, metadata);
  }
}

class SoMParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing SoMParser");
    super(data, parser_name, metadata);
  }

  parse() {
    var target_string = "military elders of [province] [location]";
    var result = this.parse_basic_intel(target_string);

    result.military_pct = this.get(
      "approximately [percentage] of our maximum population"
    );
    result.wages = this.get("wage rate is [percentage] of normal levels");
    result.military_efficiency = this.get(
      "our military is functioning at [percentage] efficiency"
    );

    result.off_me = this.get("Offensive Military Effectiveness [percentage]");
    result.offense = this.get("Net Offensive Points at Home [number]");
    result.def_me = this.get("Defensive Military Effectiveness [percentage]");
    result.defense = this.get("Net Defensive Points at Home [number]");


    var home_army = {
      "name": "Home Army",
      "number": 0,
    };
    var armies = [home_army];

    // Determine which armies are away
    var _away_duration;
    for (var i=1; i<=5; i++) {
      _away_duration = this.get("Army #" + i + " \\([number] days left");
        if (_away_duration) {
          armies.push({
            "name": "Away Army #" + i,
            "number": i,
            "away": _away_duration,
          });
        }
    }

    var unit_count_regex = " [number]".repeat(armies.length);

    var generals = this.get_multi("generals" + unit_count_regex);
    var soldiers = this.get_multi("soldiers" + unit_count_regex);
    // ospec, dspec, and elite values have unit name
    // as the first value, but we don't need it
    var ospecs = this.get_multi("[ospec]" + unit_count_regex).splice(1);
    var dspecs = this.get_multi("[dspec]" + unit_count_regex).splice(1);
    var elites = this.get_multi("[elite]" + unit_count_regex).splice(1);
    var horses = this.get_multi("war horses" + unit_count_regex);
    var land = this.get_multi("captured land" + unit_count_regex);

    for (var index in armies) {
      armies[index]["generals"] = generals[index];
      armies[index]["soldiers"] = soldiers[index];
      armies[index]["ospecs"] = ospecs[index];
      armies[index]["dspecs"] = dspecs[index];
      armies[index]["elites"] = elites[index];
      armies[index]["horses"] = horses[index];
      armies[index]["land"] = land[index];
    }
    // console.log("Armies:", armies);

    var v1_armies = this.armies_to_v1_format(armies);
    //merge into result
    for (var attr in v1_armies) {
      result[attr] = v1_armies[attr];
    }

    var training_data = this.data.slice(this.data.indexOf("below shows our training estimates"));
    var get_multi = this.get_multi;
    var get_incoming = function(format_string) {
      return get_multi(
        format_string,
        training_data,
        function(matches) {
          var result = matches[2].split(" ");
          result.shift();
          return result;
        }
      );
    };
    result.training_ospecs = get_incoming("[ospec](( [number]){0,24})");
    result.training_dspecs = get_incoming("[dspec](( [number]){0,24})");
    result.training_elites = get_incoming("[elite](( [number]){0,24})");
    result.training_thieves = get_incoming("(Thieves)(( [number]){0,24})");

    return result;
  }

  armies_to_v1_format(armies) {
    var v1_format = {
      army_home: armies[0],
      army_out_1: {},
      army_out_2: {},
      army_out_3: {},
      army_out_4: {},
      army_out_5: {},
    };

    delete v1_format.army_home.number;
    delete v1_format.army_home.name;
    for (var entry of armies.splice(1)) {
      var army_number = entry.number;
      delete entry.number;
      delete entry.name;
      v1_format["army_out_" + army_number] = entry;
    }

    return v1_format;
  }
}

class SurveyParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing SurveyParser");
    super(data, parser_name, metadata);
  }

  parse() {
    var target_string = "thieves scour the lands of [province] [location]";
    var result = this.parse_basic_intel(target_string);

    result.workers = this.get("Available Workers [number]");
    result.building_efficiency = this.get("Building Efficiency [percentage]");
    result.jobs = this.get("Available Jobs [number]");
    result.workers_needed = this.get("Max. Efficiency [number]");

    var buildings = [];
    for (var [upo_name, name, index] of config.BUILDINGS) {
      var matches = this.get_multi(name + " [number] [percentage]");
      var [quantity, percentage] = matches;
      var entry = {
        building: upo_name,
        quantity: quantity,
        percentage: percentage,
      };
      if (result.is_self) {
        var incoming_section_start = this.data.indexOf("number of days");
        var incoming = this.get_multi(
          name + "(( [number]){0,24})",
          this.data.slice(incoming_section_start),
          function(matches) {
            // Examples values of matches[0]:
            //   "Homes 1", "Training Grounds 11 5 6", "Armouries 4 1",
            //   "Guard Stations"
            var full_match = matches[0].replace(name, "");
            var full_match = full_match.replace(/^\s/, "");
            if (full_match == "") {
              return [];
            }
            return full_match.split(" ");
          }
        );
        entry.incoming = incoming;
      }
      buildings.push(entry);
    }
    result.buildings = buildings;

    return result;
  }
}

class ScienceParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing ScienceParser");
    super(data, parser_name, metadata);
  }

  parse() {
    var target_string = "thieves visit the research centers of [province] [location]\.";
    var result = this.parse_basic_intel(target_string);
    result.is_self = this.parser_name.includes("self");

    var science = [];
    for (var [upo_name, name] of config.SCIENCES) {
      var matches = this.get_multi(name + " [number] [number]");

      var entry = {
        "science": upo_name,
        "quantity": matches[0],
        "per_acre": matches[1],
      };

      if (result.is_self) {
        var incoming_section_start = this.data.indexOf("Number of days");
        var incoming = this.get_multi(
          name + "(( [number]){0,24})",
          this.data.slice(incoming_section_start),
          function(matches) {
            return matches[0].split(" ").splice(1);
          });
        entry.incoming = incoming;
      }

      science.push(entry);
    }

    result.science = science;
    return result;
  }
}

class NewsParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing NewsParser");
    super(data, parser_name, metadata);
  }
}

class KDParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing KDParser");
    super(data, parser_name, metadata);
  }
}

class MagicParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing MagicParser");
    super(data, parser_name, metadata);
  }
}

class InfiltrateParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing InfiltrateParser");
    super(data, parser_name, metadata);
  }

  parse() {
    var result = {};

    var accuracy = this.get_thievery_accuracy();

    var target_string = "Thieves' Guilds of [province] [location]\.";
    [result.province, result.kd, result.isl] = this.get_target(target_string);

    result.thieves = this.get("appear to have about [number] thieves");

    return result;
  }
}

class ThieveryParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing ThieveryParser");
    super(data, parser_name, metadata);
  }

  parse() {
    // var target_string = "";
    // var result = {};
    // [result.province, result.kd, result.isl] = this.get_target(target_string);

    // if (!result.province) {
    //   console.log("ThieveryParser initialized for op with no target!");
    //   return null;
    // }


    // After reading config.THIEFOPS, this parser isn't ready yet...
    console.log("Parsing this type of thievery op is not implemented yet");
    return null;
  }
}

class SelfSpellParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing SelfSpellParser");
    super(data, parser_name, metadata);
  }

  parse() {
    console.log("Parsing self-spells is not implemented yet");
    return null;
  }
}

class AttackParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing AttackParser");
    super(data, parser_name, metadata);
  }
}

class AidParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing AidParser");
    super(data, parser_name, metadata);
  }

  parse() {
    var aid_match = this.get("(We have sent .* It should arrive shortly)");

    var result = {};
    result.food = this.get("[number] bushel", aid_match) || 0;
    result.gold = this.get("[number] gold", aid_match) || 0;
    result.runes = this.get("[number] rune", aid_match) || 0;
    result.soldiers = this.get("[number] soldier", aid_match) || 0;

    var target_string = "to [province] [location]\.";
    [result.province, result.kd, result.isl] = this.get_target(target_string);

    return result;
  }
}





exports.getParser = function(parser_name) {
  switch (parser_name) {
    case "self":
      return SelfParser;
    case "sot":
    case "selfsot":
      return SoTParser;
    case "som":
    case "selfsom":
      return SoMParser;
    case "survey":
    case "selfsurvey":
      return SurveyParser;
    case "science":
    case "selfscience":
      return ScienceParser;
    case "kdnews":
      return NewsParser;
    case "kd":
      return KDParser;
    case "magic":
      return MagicParser;
    case "infiltrate":
      return InfiltrateParser;
    case "thievery":
      return ThieveryParser;
    case "selfspells":
      return SelfSpellParser;
    case "attack":
      return AttackParser;
    case "aid":
      return AidParser;
    default:
      throw "getParser() could not find parser: " + parser_name;
  }
}
