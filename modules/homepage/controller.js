app.controller('HomePageCtrl', function($scope, $http, $location) {

	console.log("Hello From HomePageCtrl");

	$scope.headerLabels = [{'label':'Company', 'ref':'company.about'},{'label':'Showroom', 'ref':'showroom'},
							{'label':'Services', 'ref':'undermaintenance'},{'label':'Contact', 'ref':'contact_us'}];
	// $scope.headerLabels = [{'label':'Company', 'ref':'company'},{'label':'Showroom', 'ref':'showroom'},
	// 						{'label':'Functionality', 'ref':'undermaintenance'},{'label':'Services', 'ref':'undermaintenance'},
	// 						{'label':'Collection', 'ref':'undermaintenance'},{'label':'Contact', 'ref':'contact_us'}];

	$scope.diagonalImage_class = "iid_homepage";

	backgroundResize();

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