app.controller('HomePageCtrl', function($scope, $http, $location) {

	console.log("Hello From HomePageCtrl");

	$scope.headerLabels = [{'label':'Company', 'ref':'company'},{'label':'Showroom', 'ref':'undermaintenance'},
							{'label':'Functionality', 'ref':'undermaintenance'},{'label':'Services', 'ref':'undermaintenance'},
							{'label':'Collection', 'ref':'undermaintenance'},{'label':'Contact', 'ref':'undermaintenance'}];

	$scope.diagonalImage_class = "iid_homepage";

	// $scope.company_profile = function(){
	// 	console.log("qwertyuiop");
	// 	company_profile();
	// }

	// company_profile = function(){
	// 	console.log("lalalalalalla");
	// }

	// if($state.current.data != null && $state.current.data.func != null){
	// 	var func_name = $state.current.data.func;
	// 	var fn = window[func_name];
	// 	fn();
	// }

});