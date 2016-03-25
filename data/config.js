var XRegExp = require('xregexp');

var ns = {};
ns.RACES = [
  //[race, ospec name, ospec off dspec name, dspec def, elite name, eite off, elite def, elite nw  ]
  ["orc", "goblins", 5, "trolls", 5, "ogres", 9, 2, 6.75],
  ["human", "swordsmen", 5, "archers", 5, "knights", 8, 3, 6.5],
  ["halfling", "strongarms", 5, "slingers", 5, "brutes", 6, 5, 5.0],
  //["gnome", "quickblades", 6, "pikemen", 5, "golems", 5, 5, 4.0],
  ["dwarf", "warriors", 5, "axemen", 5, "berserkers", 7, 4, 6.0],
  //["dark elf", "night rangers", 5, "druids", 5, "drows", 6, 4, 5.0],
  //["dark elf", "night rangers", 5, "druids", 5, "drow", 6, 4, 5.0],  // angel == crazy
  ["elf", "rangers", 5, "archers", 6, "elf lords", 7, 3, 6],
  ["avian", "griffins", 5, "harpies", 5, "drakes", 8, 3, 6.5],
  ["faery", "magicians", 5, "druids", 5, "beastmasters", 3, 7, 7],
  ["undead", "skeletons", 5, "zombies", 5, "ghouls", 9, 3, 7],
]

ns.rulerPrefix = 0
ns.rulerPostfix = 1

ns.RULERSPECIALIZATION = [
  ["merchant", ns.rulerPrefix , "the wealthy"],
  ["shepherd", ns.rulerPrefix, "the humble"],
  ["sage" , ns.rulerPrefix, "the wise"],
  ["rogue", ns.rulerPostfix, "the rogue"],
  ["mystic", ns.rulerPostfix, "the sorcerer", "the sorceress"],
  ["warrior", ns.rulerPostfix, "the warrior"],
  ["tactician", ns.rulerPrefix, "the conniving"],
  //["artisan", "the craftsman", "the craftswoman"],
  ["warhero", ns.rulerPostfix, "the hero"],
  ["cleric", ns.rulerPostfix, "the blessed"],
]

ns.RULERNOBILITY = [
  ["peasant", ],
  ["knight", "knight", "lady"],
  ["lord", "lord", "noble lady"],
  ["baron", "baron", "baroness"],
  ["viscount", "viscount", "viscountess"],
  ["count", "count", "countess"],
  ["marquis", "marquis", "marchioness"],
  ["duke", "duke", "duchess"],
  ["prince", "prince", "princess"],
  ["king", "king", "queen"],
]

ns.SPELLS = [
  ["minorprotection", "Our realm is now under a sphere of protection (?:for|until) (?<duration>[duration])"],
  ["greaterprotection",  "Our realm is now under a sphere of protection (?:for|until) (?<duration>[duration])"],
  ["fog", ],
  ["magicshield", "The magical auras within our province will protect us from the black magic of our enemies (?:for|until) (?<duration>[duration])"],
  ["mysticaura", "A Mystic Aura has been placed around our province, protecting us from the next evil spell from abroad"],
  ["fertilelands", "We have made our lands extraordinarily fertile (?:for|until) (?<duration>[duration])"],
  ["naturesblessing", "Our lands have been blessed by nature (?:for|until) (?<duration>[duration]), and will be protected from drought and storms."],
  ["loveandpeace", "Our peasantry is influenced by a magical calm. We expect birth rates to be higher (?:for|until) (?<duration>[duration])"],
  ["treeofgold", "52,865 gold coins have fallen from the trees!", false, "gold"],
  ["quickfeet", "Our armies have been blessed with excellent speed (?:for|until) their next battle."],
  ["buildersboon", "Our builders have been blessed with unnatural speed (?:for|until) (?<duration>[duration])"],
  ["inspirearmy", "Our army has been inspired to train harder. We expect maintenance costs to be reduced (?:for|until) (?<duration>[duration])"],
  ["anonymity", "Our next attack will be cloaked under the shades of anonymity."],
  ["invisibility", "Our thieves have been made partially invisible (?:for|until) (?<duration>[duration])"],
  ["clearsight", "Our police have been blessed with Clear Sight (?:for|until) (?<duration>[duration])"],
  ["warspoils", "Our army has been blessed with immediate War Spoils (?:for|until) (?<duration>[duration])"],
  ["fanaticism", "Our army will fight with fanatical fervor (?:for|until) (?<duration>[duration])"],
  ["fountainofknowledge", "Our students are blessed with excellent concentration (?:for|until) (?<duration>[duration])"],
  ["townwatch", "Our peasants will help defend our lands (?:for|until) (?<duration>[duration])"],
  ["aggression", "Our soldiers will fight with unique aggression (?:for|until) (?<duration>[duration])"],
  ["animatedead", "Our dead will be awakened the next time our lands are attacked!"],
  ["reflectmagic", "Some of the spells cast upon our lands will be reflected back upon their creators (?:for|until) (?<duration>[duration])"],
  ["shadowlight", "ur lands are blessed with Shadowlight. The next time thieves enter our lands their identities will be revealed."],
  ["patriotism", "Our people are excited about the military and will signup more quickly (?:for|until) (?<duration>[duration])"],
  ["paradise", "Our mages created 5 acres more land for us to use."],
  ["bloodlust", ],
  ["magesfury", ],
  // offense
  // op, string, no caster not self, damage
  ["storms", "Storms will ravage (?<target>[province] [location]) for (?<duration>[duration])"],
  ["droughts", "A drought will reign over the lands of (?<target>[province] [location]) for (?<duration>[duration])"],
  ["vermin", "Vermin will feast on the granaries of (?<target>[province] [location]) for (?<duration>[duration])" ],
  // new
  ["exposethieves", "Our mages have illuminated the lands of our enemies and exposed the thieves that walk through their lands", true],
  ["greed", "soldiers to turn greedy for (?<duration>[duration])", true],
  // new
  ["foolsgold", "mages have turned (?<delta>[number]) gold coins in (?<target>[province] [location]) to worthless lead", false, "gold"],
  ["pitfalls", "Pitfalls will haunt the lands of (?<target>[province] [location]) for (?<duration>[duration])"],
  ["fireball", "A fireball burns through the skies of (?<target>[province] [location]). (?<delta>[number]) peasants", false, "peasants"],
  ["chastity", "womenfolk of (?<target>[province] [location]) have taken a vow of chastity for (?<duration>[duration])"],
  ["lightningstrike", ],
  ["explosions","Explosions will rock aid shipments to and from (?<target>[province] [location]) for (?<duration>[duration])" ],
  ["amnesia", ],
  ["nightmares", "During the night, (?<delta>[number]) of the men in the armies and thieves' guilds of (?<target>[province] [location]) had nightmares", false, "troops"],
  ["mysticvortex", ],
  ["meteorshowers", "Meteors will rain across the lands of (?<target>[province] [location]) for (?<duration>[duration])"],
  ["tornadoes", "Tornadoes scour the lands of (?<target>[province] [location]), laying waste to (?<delta>[number]) acres", false, "buildings"],
  ["landlust", "Our Land Lust over (?<target>[province] [location]) has given us another (?<delta>[number]) acres of land", false, "land"],
  // misc
  ["naturesblessing", "Unfortunately, that land has been blessed by nature, and our spell had no effect", true],
]

var THIEFOPS = [
  // op, string, damage
  ["sabotagewizards", ],
  ["robthegranaries", "Early indications show that our operation was a success. Our thieves have returned with (?<delta>[number]) bushels.", "food"],
  ["robthevaults", ],
  ["robthetowers", ],
  ["kidnapping", "Our thieves kidnapped many people, but only were able to return with (?<delta>[number]) of them", "peasants"],
  ["arson", "Our thieves burned down (?<delta>[number]) acres of buildings", "buildings"],
  ["greaterarson", ],
  ["nightstrike", "Our thieves assassinated (?<delta>[number]) enemy troops", "troops"],
  ["inciteriots", "Our thieves have caused rioting. It is expected to last (?<duration>[duration])" ],
  ["stealhorses", ],
  ["bribethieves", "Our thieves have bribed members of our enemies. guild"],
  ["bribegenerals", "Our thieves have bribed an enemy general"],
  ["freeprisoners", ],
  ["assassinatewizards", "Our thieves assassinated (?<delta>[number]) wizards of the", "wizards"],
  ["propaganda", "We have converted (?<delta>[number]) .{0,40}(?<kind>(?:wizards|thieves|soldiers|specialist|[elite]))"],
];

var BUILDINGS = [
  ["barrenlands","Barren Land", null],
  ["homes","Homes", "0"],
  ["farms","Farms", "1"],
  ["mills","Mills", "2"],
  ["banks","Banks", "3"],
  ["traininggrounds","Training Grounds", "4"],
  ["armouries","Armouries", "5"],
  ["barracks","Military Barracks", "6"],
  ["forts","Forts", "7"],
  ["guardstations","Guard Stations", "8"],
  ["hospitals","Hospitals", "9"],
  ["guilds","Guilds", "10"],
  ["towers","Towers", "11"],
  ["thievesdens","Thieves' Dens", "12"],
  ["watchtowers","Watch Towers", "13"],
  ["libraries","Libraries", "14"],
  ["schools","Schools", "15"],
  ["stables","Stables", "16"],
  ["dungeons","Dungeons", "17"],
];
exports.BUILDINGS = BUILDINGS;

// Knowledge types mapped to the names Upo uses internally
// [[UpoOpu name, Utopia name], ...]
var SCIENCES = [
  ["alchemy", "Alchemy"],
  ["tools" , "Tools"],
  ["housing", "Housing"],
  ["food" , "Food"],
  ["military", "Military"],
  ["thievery" , "Crime"],
  ["channeling", "Channeling"]
];
exports.SCIENCES = SCIENCES;

ns.DRAGONS = [
  ["gold", ],
  ["ruby", ],
  ["sapphire", ],
  ["emerald", ],
  ["nodragon", ],
]

ns.GBP = [
  ["nothit", "attacked much", "hit much", 0],
  ["couple", "attacked a little", "hit a little", 5],
  ["moderately", "attacked moderately","hit moderately", 25],
  ["heavily", "attacked pretty heavily","hit pretty heavily", 45],
  ["extremelyheavily", "attacked extremely badly","hit extremely badly", 65]
]

ns.RELATIONS = [
  ["norel", "Normal"],
  ["unfriendly" , "Unfriendly"],
  ["hostile", "Hostile"],
  ["war" , "War"],
  ["cf", "Non Aggression Pact"]
]

// data for ruler
// specialization = ( (s.slice(2)).join("|") for s of ns.RULERSPECIALIZATION).join("|")
// nobility = ( [s[2], s[1]].join("|") if s.length > 1 for s of ns.RULERNOBILITY).join("|")
races = [for (entry of ns.RACES) entry[0]].join("|")
ospec = [for (entry of ns.RACES) entry[1]].join("|")



// [[name, regex], ...]
FORMATS = [
  ["province", "[a-zA-z0-9 _-]{3,30}"],
  ["provinceng" , "[a-zA-z0-9 _-]{3,30}?"], // non greedy version
  ["kingdom" , "[a-zA-z0-9 _-]{3,30}"],
  ["location" , "\\(\\s?([0-9]{1,2})\\s?:\\s?([0-9]{1,2})\\s?\\)"],
  ["uto_date" , "[a-z]+ [0-9]+ of YR[0-9]+"],
  ["word" , "\\S?\\s?\\S+\\b\\S*"],
  ["number" , "[-0-9,.]+"],
  ["percentage" , "[-0-9,.]+%"],
  ["ruler", "(#specialization|) ?(#nobility|)([a-zA-z0-9 _-]{3,31}?)(|#specialization)(?= (#races)| (#ospec)|$|,[^0-9]|Personality|\\*\\* Summary)"],
  ["race" , [for (entry of ns.RACES) entry[0]].join("|")],
  ["ospec" , [for (entry of ns.RACES) entry[1]].join("|")],
  ["dspec" , [for (entry of ns.RACES) entry[3]].join("|")],
  ["elite" , [for (entry of ns.RACES) entry[5]].join("|")],

//   ["honor" ,   (([s[2], s[1]]).join("|") if s.length > 1 for s of ns.RULERNOBILITY).join("|")],
//   ["honorext" ,  "peasant|" + (([s[2], s[1]]).join("|") if s.length > 1 for s of ns.RULERNOBILITY).join("|")],

  ["dragon" ,   [for (entry of ns.DRAGONS) entry[0]].join("|")],

  ["gbp" , [for (entry of ns.GBP) entry[1]].join("|")],
  ["gbpangel" , [for (entry of ns.GBP) entry[2]].join("|")],

  ["stance" ,  ["normal", "peaceful", "aggressive", "fortified"].join("|")],

  ["duration" , "(?<durationnumber>[0-9]+|the end of this)? day"],

//   ["spell_result" , ( s[1] if s.length > 1 for s of ns.SPELLS).join("|")],
//   ["thief_result" , ( s[1] if s.length > 1 for s of ns.THIEFOPS).join("|")],
  ["relation", [for (entry of ns.RELATIONS) entry[1]].join("|")]
]




// [[name, regex], ...]
// Regex that will identify utopia pages that we care about
var raw_page_identifiers = [
  ["aid", "We have sent [number] (?:bushel|gold coin|rune|soldier)s?.{0,80} to [province] [location]"],
  ["self", "self\\[[province]:[location]\\]"],
  ["sot", "the province of [province] [location] ?(?:Pre Age|[uto_date]).?[word]{3,15}.?race [race]"],
  ["angelsot", "The Province of [province] [location] \\[http://www.utopiatemple.com"],
  ["som", "thieves listen in on a report from the Military Elders of [province] [location]"],
  ["selfsom", "[ruler], we have [number] generals available to lead our armies. One must always stay here to lead our forces in defense"],
  ["angelsom", "Military Intelligence on [province] [location] \\[http://www.utopiatemple.com"],
  ["survey", "thieves scour the lands of [province] [location]"],
  ["selfsurvey", "(The structures we construct throughout our lands may or) may not function at full capacity"],
  ["science", "thieves visit the research centers of [province] [location]"],
  ["selfscience", "you know that sending our scholars to study requires time"],
  ["infiltrate", "Our thieves have infiltrated the Thieves' Guilds"],
  ["kdnews", "(Our thieves have stolen the last 2 month's of kingdom news|The Kingdom Reporter [word]{2,5} Edition [word]{2,5} Edition)"],
  ["kd", "(?:current kingdom is|kingdom of) [kingdom] [location](?:.{0,400} total provinces)"],
  ["magic", "Your wizards(?: gather [number] runes and)? begin casting.*?[spell_result]"],
  ["thievery", "Early indications show that our operation was a success.*?[thief_result]"],
  ["selfspells", "(there are currently no magical auras affecting our province|the magical auras affecting our province are detailed below)"],
  ["attack", "(Your army was no match for the defenses of|Your forces arrive at) [province] [location]"],
];



function expand_regex(search_string) {
  var regex = search_string;
  for (var format of FORMATS) {
    var format_name = "[" + format[0] + "]";
    var format_regex = "(" + format[1] + ")";

    while (regex.includes(format_name)) {
      // console.log("Replacing", format_name, "with regex:", format_regex);
      regex = regex.replace(format_name, format_regex);
    }
  }
  return regex;
}

function compile_regex(regex) {
  var compiled_regex;
  var is_xregex = false;
  if (regex.includes("(?<")) {
    // console.log("Compiling XRegExp", regex);
    compiled_regex = new XRegExp(regex, "i");
    is_xregex = true;
  } else {
    // console.log("Compiling normal regex", regex);
    compiled_regex = new RegExp(regex, "i");
  }

  return [compiled_regex, is_xregex];
}

function expand_and_compile_regex(regex) {
  // console.log("Expanding regex:", regex);
  var full_regex = expand_regex(regex);
  // console.log("Compiling regex:", full_regex);
  return compile_regex(full_regex);
}
exports.expand_and_compile_regex = expand_and_compile_regex;


// console.log("Building page identifiers...")
var page_identifiers = [];
for (var [name, regex] of raw_page_identifiers) {
  var [compiled_regex, is_xregex] = expand_and_compile_regex(regex);
  page_identifiers.push([name, compiled_regex, is_xregex]);
}
// console.log("Finished building page identifiers:");
// console.log(page_identifiers);

exports.PAGE_IDENTIFIERS = page_identifiers;
