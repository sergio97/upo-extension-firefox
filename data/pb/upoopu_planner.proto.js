if (typeof(UpoOpu)=="undefined") {UpoOpu = {};}
if (typeof(UpoOpu.pb)=="undefined") {UpoOpu.pb = {};}
//import "upoopu_enums.proto";

UpoOpu.pb.WaveSetup = PROTO.Message("UpoOpu.pb.WaveSetup",{
Province : PROTO.Message("UpoOpu.pb.WaveSetup.Province",{
	province: {
		options: {},
		multiplicity: PROTO.required,
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
	gbp: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 10
	},
	generals: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 11
	},
	offense: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 12
	},
	defense: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 13
	},
	army_back_in: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 14
	},
	land_coming_in: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 15
	}})
,
	attackers: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.WaveSetup.Province;},
		id: 1
	},
	targets: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.WaveSetup.Province;},
		id: 2
	}});
UpoOpu.pb.WarPlan = PROTO.Message("UpoOpu.pb.WarPlan",{
Attack : PROTO.Message("UpoOpu.pb.WarPlan.Attack",{
	target: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	attacker: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 2
	}})
,
	min_dpa: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 1
	},
	min_def: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 2
	},
	defense_limit: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 3
	},
	defense_limit_races: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.string;},
		id: 4
	},
	keep_attackers_sorted: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 5
	},
	keep_targets_sorted: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 6
	},
	attacks: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.WarPlan.Attack;},
		id: 7
	}});
