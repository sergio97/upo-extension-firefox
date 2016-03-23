if (typeof(UpoOpu)=="undefined") {UpoOpu = {};}
if (typeof(UpoOpu.pb)=="undefined") {UpoOpu.pb = {};}
//import "upoopu_enums.proto";

UpoOpu.pb.IntelAttack = PROTO.Message("UpoOpu.pb.IntelAttack",{
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
	self_province: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 4
	},
	self_kd: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 5
	},
	self_isl: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 6
	},
	kills: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 11
	},
	losses: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 12
	},
	taken_acres: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 13
	},
	taken_books: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 14
	},
	taken_peasants: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 15
	},
	destroyed_t_and_m: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 16
	},
	taken_gold: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 17
	},
	taken_runes: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 18
	},
	taken_food: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 19
	},
	destroyed_acres: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 20
	},
	attack_time: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.Float;},
		id: 21
	},
	attack_type: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.AttackType;},
		id: 22
	},
	oversend: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return UpoOpu.pb.AttackOversendType;},
		id: 23
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
UpoOpu.pb.IntelHistory = PROTO.Message("UpoOpu.pb.IntelHistory",{
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
	honor: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.HonorType;},
		id: 4
	},
	peasants: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 5
	},
	soldiers: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 6
	},
	ospecs: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 7
	},
	dspecs: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 8
	},
	elites: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 9
	},
	horses: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 10
	},
	thieves: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 11
	},
	wizards: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 12
	},
	thieves_pct: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 13
	},
	wizards_pct: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 14
	},
	land: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 15
	},
	nw: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 16
	},
	gold: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 17
	},
	food: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 18
	},
	runes: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 19
	},
	building_eff: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 20
	},
	trade_balance: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.sint32;},
		id: 21
	},
	offense: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 22
	},
	defense: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 23
	},
	unix_time: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 35
	},
	trust: {
		options: {packed:true},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.int32;},
		id: 36
	}});
UpoOpu.pb.UserProvinces = PROTO.Message("UpoOpu.pb.UserProvinces",{
Province : PROTO.Message("UpoOpu.pb.UserProvinces.Province",{
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
	trust: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 4
	},
	t5: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bool;},
		id: 5
	},
	id: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 6
	}})
,
	provinces: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.UserProvinces.Province;},
		id: 1
	}});
UpoOpu.pb.IntelTargetFinder = PROTO.Message("UpoOpu.pb.IntelTargetFinder",{
Province : PROTO.Message("UpoOpu.pb.IntelTargetFinder.Province",{
	name: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 1
	},
	race: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 2
	},
	kd_isl: {
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
	kd_nw: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.int32;},
		id: 5
	},
	norm_data: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bytes;},
		id: 6
	},
	list_data: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.bytes;},
		id: 7
	}})
,
	provinces: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return UpoOpu.pb.IntelTargetFinder.Province;},
		id: 1
	}});
