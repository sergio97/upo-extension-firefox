// put main code in here, such as findParser() and getParser()

// for now, put all parsers into this file as well.
// In the future, split each parser out into their own file

var config = require("./../config");


// TODO(Sergio): Clean all these up
// var selfData = null;
var selfData = ["My Prov Name", 1, 2];
var lastUtoTime = null;

var reCache = {};


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

function utimeToInt(utime, short) {
  var months = ["January", "February", "March", "April", "May", "June", "July"];
  var regex_string = `(${months.join("|")}) ([0-9]{1,2}) of YR([0-9]{1,2})`
  if (short) {
    months = ["Jan", "Feb", "March", "April", "May", "June", "July"];
    regex_string = `(${months.join("|")}) ([0-9]{1,2}), YR([0-9]{1,2})`
  }
  var regex = new RegExp(regex_string);

  var matches = regex.exec(utime);
  // console.log("Parsing this date:", utime, "Is short?", short, "- Result of parsing:", matches);
  var day = parseInt(matches[2]);
  var month = matches[1];
  var year = parseInt(matches[2]);

  return day + (months.indexOf(month) * 24) + (year * 24 * 7);
}


class BaseParser {
  constructor(data, parser_name, metadata) {
    // console.log("Initializing base parser");
    if (typeof(metadata)=="undefined") {metadata = {};}

    this.data = data;
    this.parser_name = parser_name;
    this.metadata = metadata;

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

  add_common_intel(result, target_string) {
    // Parse data common to SoM/Survey/SoS and add it to 'result'
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

  parse_common_data() {
    var result = {};

    result.unix_time = parseInt(new Date().valueOf() / 1000);

    var utopia_date = this.get("[utopia_short_date] Throne");
    console.log("Attempting to parse short date returned:", utopia_date);
    if (utopia_date) {
      result.uto_time = utimeToInt(utopia_date, true);
    } else {
      console.log("Warning: Unable to detect Utopia date");
    }

    return result
  }

  parse() {
    throw "parse() not implemented yet for parser: " + this.parser_name;
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

  parse() {
    var result = this.parse_common_data();

    result.is_self = true;
    if (this.get("(Thieves Unknown)")) {
      result.is_self = false;
      result.accuracy = this.get_thievery_accuracy();
    }

    var matches = this.get_multi("the province of [province] [location] ?(?:Pre Age|[utopia_date])");
    result.province = matches[0];
    result.kd = matches[2];
    result.isl = matches[3];
    var utopia_date = matches[4];
    if (utopia_date) {
      result.tick = utimeToInt(utopia_date);
    } else {
      result.tick = 0;
    }

    if (!result.is_self) {
      var attacked_recently = this.get("this province has [gbp] in the last month");
      result.gbp = config.GBP[attacked_recently];
    }

    result.race = this.get("Race [race]");
    result.soldiers = this.get("Soldiers [number]");

    var matches;
    // [ospec] prevents [ruler] from matching any further
    matches = this.get_multi("Ruler [ruler] [ospec]");
    var personality_prefix = matches[1];
    var nobility = matches[2];
    result.ruler = matches[3];
    var personality_suffix = matches[4];
    [result.honor, result.monarch, result.sex] = this.parseNobility(nobility);
    // Either a prefix or a suffix will be defined, never both
    result.personality = this.getPersonality(
      personality_prefix || personality_suffix
    );
    result.ospecs = this.get_multi("[ospec] [number]")[1];
    result.land = this.get("Land [number]");
    result.dspecs = this.get_multi("[dspec] [number]")[1];
    result.peasants = this.get("Peasants [number]");
    result.elites = this.get_multi("[elite] [number]")[1];
    result.building_eff = this.get("Building Eff. [percentage]");
    if (result.is_self) {
      matches = this.get_multi("Thieves [number] \\([percentage]\\)");
      result.thieves = matches[0];
      result.thieves_pct = matches[1];
    }
    result.gold = this.get("Money [number]");
    if (result.is_self) {
      matches = this.get_multi("Wizards [number] \\([percentage]\\)");
      result.wizards = matches[0];
      result.wizards_pct = matches[1];
    }
    result.food = this.get("Food [number]");
    result.horses = this.get("War Horses [number]");
    result.runes = this.get("Runes [number]");
    result.prisoners = this.get("Prisoners [number]");
    result.trade_balance = this.get("Trade Balance [number]");
    result.offense = this.get("Off. Points [number]");
    result.nw = this.get("Networth [number] gold coins");
    result.defense = this.get("Def. Points [number]");

    var dragon = this.get("A [dragon] dragon ravages the lands!");
    if (dragon) {
      result.dragon = dragon;
    }

    var plague = this.get("The Plague has spread throughout our people!");
    result.plague = !(plague == "undefined");

    var war = this.get("Our Kingdom is at WAR!");
    if (war) {
      result.relations = "war";
    }

    return result;
  }

  getPersonality(personality){
    return config.PERSONALITIES[personality];
  }

  parseNobility(nobility_string) {
    var nobility = nobility_string;
    var is_monarch = ["king", "queen"].includes(nobility_string);
    var gender = "female";
    if (config.MALE_NOBILITIES.includes(nobility_string)) {
      gender = "male";
    } else {
      // the resulting data structure expacts nobility titles to be
      // the male version, regardless of gender
      var nobility_index = config.FEMALE_NOBILITIES.indexOf(nobility_string);
      nobility = config.MALE_NOBILITIES[nobility_index];
    }
    return [nobility, is_monarch, gender];
  }
}

class SoMParser extends BaseParser {
  constructor(data, parser_name, metadata) {
    console.log("Initializing SoMParser");
    super(data, parser_name, metadata);
  }

  parse() {
    var result = this.parse_common_data();

    var target_string = "military elders of [province] [location]";
    this.add_common_intel(result, target_string);

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
    var result = this.parse_common_data();

    var target_string = "thieves scour the lands of [province] [location]";
    this.add_common_intel(result, target_string);

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
    var result = this.parse_common_data();

    var target_string = "thieves visit the research centers of [province] [location]\.";
    this.add_common_intel(result, target_string);
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
    var result = this.parse_common_data();

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
    // var result = this.parse_common_data();
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

    var result = this.parse_common_data();
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
