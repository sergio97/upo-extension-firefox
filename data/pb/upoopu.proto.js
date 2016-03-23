if (typeof(UpoOpu)=="undefined") {UpoOpu = {};}
if (typeof(UpoOpu.pb)=="undefined") {UpoOpu.pb = {};}
//import "upoopu_enums.proto";
//import "upoopu_utopia_misc.proto";

UpoOpu.pb.IntelSoT = PROTO.Message("UpoOpu.pb.IntelSoT",{
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	race: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.RaceType;},
		id: 4
	},
	soldiers: {
		options: {default_value:0},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 5
	},
	ruler: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 6
	},
	honor: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.HonorType;},
		id: 7
	},
	personality: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.PersonalityType;},
		id: 8
	},
	monarch: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 9
	},
	sex: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.SexType;},
		id: 10
	},
	ospecs: {
		options: {default_value:0},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 11
	},
	land: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 12
	},
	dspecs: {
		options: {default_value:0},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 13
	},
	peasants: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 14
	},
	elites: {
		options: {default_value:0},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 15
	},
	building_eff: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 16
	},
	thieves: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 17
	},
	thieves_pct: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 18
	},
	gold: {
		options: {default_value:0},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 19
	},
	wizards: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 20
	},
	wizards_pct: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 21
	},
	food: {
		options: {default_value:0},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 22
	},
	horses: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 23
	},
	runes: {
		options: {default_value:0},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 24
	},
	prisoners: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	trade_balance: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 26
	},
	offense: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 27
	},
	defense: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 28
	},
	dragon: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.DragonType;},
		id: 29
	},
	relations: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.RelationType;},
		id: 30
	},
	nw: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 31
	},
	gbp: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 32
	},
	has_plague: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 33
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 35
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	trust: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 36
	},
	accuracy: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 52
	},
	poster: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 37
	},
	by_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 38
	},
	by_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 39
	},
	is_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 40
	},
	tick: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 41
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelSoM = PROTO.Message("UpoOpu.pb.IntelSoM",{
Army : PROTO.Message("UpoOpu.pb.IntelSoM.Army",{
	away: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 1
	},
	generals: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	soldiers: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 8
	},
	ospecs: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	dspecs: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 4
	},
	elites: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 5
	},
	horses: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 6
	},
	land: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 7
	}})
,
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	military_pct: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 4
	},
	wages: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 5
	},
	military_efficiency: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 6
	},
	off_me: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 7
	},
	def_me: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 8
	},
	defense: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 9
	},
	offense: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 10
	},
	army_home: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.IntelSoM.Army;},
		id: 11
	},
	army_out_1: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.IntelSoM.Army;},
		id: 12
	},
	army_out_2: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.IntelSoM.Army;},
		id: 13
	},
	army_out_3: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.IntelSoM.Army;},
		id: 14
	},
	army_out_4: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.IntelSoM.Army;},
		id: 15
	},
	army_out_5: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.IntelSoM.Army;},
		id: 21
	},
	training_ospecs: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 16
	},
	training_dspecs: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 17
	},
	training_elites: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 18
	},
	training_thieves: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 19
	},
	race: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.RaceType;},
		id: 20
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	trust: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 26
	},
	accuracy: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 52
	},
	poster: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 29
	},
	by_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 27
	},
	by_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 28
	},
	is_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 30
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelSurvey = PROTO.Message("UpoOpu.pb.IntelSurvey",{
BuildingData : PROTO.Message("UpoOpu.pb.IntelSurvey.BuildingData",{
	building: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.BuildingType;},
		id: 1
	},
	quantity: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	percentage: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 3
	},
	incoming: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 4
	}})
,
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	workers: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 4
	},
	jobs: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 5
	},
	building_efficiency: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 6
	},
	workers_needed: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 7
	},
	buildings: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelSurvey.BuildingData;},
		id: 10
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	trust: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 26
	},
	accuracy: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 52
	},
	poster: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 29
	},
	by_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 27
	},
	by_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 28
	},
	is_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 30
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelScience = PROTO.Message("UpoOpu.pb.IntelScience",{
ScienceData : PROTO.Message("UpoOpu.pb.IntelScience.ScienceData",{
	science: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.ScienceType;},
		id: 1
	},
	quantity: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	per_acre: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 3
	},
	incoming: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 4
	}})
,
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	sciences: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelScience.ScienceData;},
		id: 10
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	trust: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 26
	},
	accuracy: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 52
	},
	poster: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 29
	},
	by_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 27
	},
	by_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 28
	},
	is_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 30
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelInfiltrate = PROTO.Message("UpoOpu.pb.IntelInfiltrate",{
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	thieves: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 4
	},
	by_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 5
	},
	by_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 6
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	trust: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 26
	},
	accuracy: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 52
	},
	poster: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 29
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelKD = PROTO.Message("UpoOpu.pb.IntelKD",{
Province : PROTO.Message("UpoOpu.pb.IntelKD.Province",{
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	race: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.RaceType;},
		id: 2
	},
	land: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	nw: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 4
	},
	honor: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.HonorType;},
		id: 5
	},
	monarch: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 6
	},
	protection: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 7
	}})
,
	kingdom: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	by_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 13
	},
	by_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 14
	},
	relation_origin_to_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.RelationType;},
		id: 15
	},
	relation_kd_to_origin: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.RelationType;},
		id: 16
	},
	points_origin_to_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 17
	},
	points_kd_to_origin: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 18
	},
	stance: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.StanceType;},
		id: 6
	},
	wars_won: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 7
	},
	wars_concluded: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 8
	},
	avg_opponent_nw: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 9
	},
	provinces: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelKD.Province;},
		id: 10
	},
	war_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 11
	},
	war_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 12
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelKdNews = PROTO.Message("UpoOpu.pb.IntelKdNews",{
ProvinceAction : PROTO.Message("UpoOpu.pb.IntelKdNews.ProvinceAction",{
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	target_province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 4
	},
	target_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 5
	},
	target_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 6
	},
	acres_taken: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 7
	},
	attack: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.AttackType;},
		id: 8
	},
	tick: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 10
	},
	action: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 11
	}})
,
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 1
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	province_actions: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelKdNews.ProvinceAction;},
		id: 3
	},
	tick_start: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 6
	},
	tick_end: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 7
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelOp = PROTO.Message("UpoOpu.pb.IntelOp",{
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	spell: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.SpellType;},
		id: 4
	},
	thiefop: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.ThiefType;},
		id: 5
	},
	dur: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 6
	},
	delta_acres: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 7
	},
	delta_peasants: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 8
	},
	delta_troops: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 9
	},
	delta_wizards: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 10
	},
	delta_thieves: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 11
	},
	delta_specs: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 12
	},
	delta_soldiers: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 13
	},
	delta_elites: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 14
	},
	resource: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.ResourceType;},
		id: 15
	},
	delta: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.sint32;},
		id: 16
	},
	poster: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 17
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelSelfSpells = PROTO.Message("UpoOpu.pb.IntelSelfSpells",{
Spell : PROTO.Message("UpoOpu.pb.IntelSelfSpells.Spell",{
	spell: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.SpellType;},
		id: 1
	},
	dur: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	}})
,
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	spells: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelSelfSpells.Spell;},
		id: 4
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelAid = PROTO.Message("UpoOpu.pb.IntelAid",{
Spell : PROTO.Message("UpoOpu.pb.IntelAid.Spell",{
	spell: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.SpellType;},
		id: 1
	},
	dur: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	}})
,
	province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 2
	},
	isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 3
	},
	gold: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 4
	},
	runes: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 5
	},
	food: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 6
	},
	soldiers: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 7
	},
	poster: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 17
	},
	unix_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 25
	},
	uto_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 53
	},
	by_self: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 50
	},
	by_groups: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 51
	}});
UpoOpu.pb.IntelCombined = PROTO.Message("UpoOpu.pb.IntelCombined",{
	sots: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelSoT;},
		id: 1
	},
	soms: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelSoM;},
		id: 2
	},
	kds: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelKD;},
		id: 3
	},
	ops: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelOp;},
		id: 5
	},
	surveys: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelSurvey;},
		id: 6
	},
	kdnews: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelKdNews;},
		id: 7
	},
	science: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelScience;},
		id: 8
	},
	infiltrates: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelInfiltrate;},
		id: 9
	},
	attacks: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelAttack;},
		id: 11
	},
	selfspells: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelSelfSpells;},
		id: 12
	},
	aid: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelAid;},
		id: 13
	},
	current_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 10
	},
	historic_data: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelHistory;},
		id: 20
	}});
