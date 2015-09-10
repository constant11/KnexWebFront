app.controller('ShowroomCtrl', function($scope, $http, $location) {

	console.log("Hello From ShowroomCtrl");

	// $scope.headerLabels = [{'label':'Company', 'ref':'services'},{'label':'Showroom', 'ref':'services.detail'},
	// 						{'label':'Collections', 'ref':'phonebook'},{'label':'Functionality', 'ref':'services'},
	// 						{'label':'Press', 'ref':'services'},{'label':'Contact', 'ref':'services'}];

	var path = "http://api.knex-ph.com/KnexWebAPI/images/company/";
	var path_thumb = "public/images/company/thumbnail/";

	var images = [{'path_b':path+"closet_show_2_b.jpg", 'path_s':path_thumb+"closet_show_2_m.jpg", "title": "Closet"},
					{'path_b':path+"closetshow_b.jpg", 'path_s':path_thumb+"closetshow_m.jpg", "title": "Closet"},
					{'path_b':path+"kids_room_b.jpg", 'path_s':path_thumb+"kids_room_m.jpg", "title": "Kids"},
					{'path_b':path+"Kitchen1_b.jpg", 'path_s':path_thumb+"Kitchen1_m.jpg", "title": "Kitchen"},
					{'path_b':path+"Kitchen2_b.jpg", 'path_s':path_thumb+"Kitchen2_m.jpg", "title": "Kitchen"},
					{'path_b':path+"kitchen3_b.jpg", 'path_s':path_thumb+"kitchen3_m.jpg", "title": "Kitchen"},
					{'path_b':path+"one_bed_living_b.jpg", 'path_s':path_thumb+"one_bed_living_m.jpg", "title": "Living Room"},
					{'path_b':path+"one_bedroom_kit_b.jpg", 'path_s':path_thumb+"one_bedroom_kit_m.jpg", "title": "Kitchen"},
					{'path_b':path+"one_bedroom_Utility_b.jpg", 'path_s':path_thumb+"one_bedroom_Utility_m.jpg", "title": "One Bedroom Utility"},
					{'path_b':path+"study_table_b.jpg", 'path_s':path_thumb+"study_table_m.jpg", "title": "Study"}];

	$.fn.images_test2(images);
	$.fn.loadFunctions();
	backgroundResize();
	$(".navbar-collapse").collapse('hide');
});