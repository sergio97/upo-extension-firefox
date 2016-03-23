if (typeof(UpoOpuApp)=="undefined") {UpoOpuApp = {};}
if (typeof(UpoOpuApp.pb)=="undefined") {UpoOpuApp.pb = {};}

UpoOpuApp.pb.EventType= PROTO.Enum("UpoOpuApp.pb.EventType",{
		EVENT_GOT_UTO_USER_PASS :1,
		EVENT_GOT_UTO_PROV :2,
		EVENT_UTO_CONNECTED :3,
		EVENT_UPOOPU_CONNECTED :10,
		EVENT_UPOOPU_INVALID_CREDENTIALS :11});
UpoOpuApp.pb.UpoOpuEvent = PROTO.Message("UpoOpuApp.pb.UpoOpuEvent",{
	event: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return UpoOpuApp.pb.EventType;},
		id: 1
	},
	data: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 2
	}});
UpoOpuApp.pb.AppRequestType= PROTO.Enum("UpoOpuApp.pb.AppRequestType",{
		APP_REQUEST_GOT_UTO_USER_PASS :1});
UpoOpuApp.pb.UpoOpuAppRequest = PROTO.Message("UpoOpuApp.pb.UpoOpuAppRequest",{
	event: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return UpoOpuApp.pb.AppRequestType;},
		id: 1
	},
	data: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 2
	}});
