app.controller('HomePageCtrl', function($scope, $http, $location) {

	console.log("Hello From HomePageCtrl");

	$scope.headerLabels = [{'label':'Company', 'ref':'services'},{'label':'Showroom', 'ref':'services.detail'},
							{'label':'Collections', 'ref':'phonebook'},{'label':'Functionality', 'ref':'services'},
							{'label':'Press', 'ref':'services'},{'label':'Contact', 'ref':'services'}];

});