app.controller('CompanyCtrl', function($state, $scope, $http, $location, $stateParams) {

	console.log("Hello From CompanyCtrl");

	$scope.moduleNav = [{'label':'Design', 'ref':'company'},{'label':'Management', 'ref':'company.company_management'},
							{'label':'Site', 'ref':'company.company_site'}, {'label':'Product', 'ref':'company.company_product'}];

	// $scope.diagonalImage_class = "iid_company_design";


	$scope.company_design = function(){
		company_design();
	}
	$scope.company_management = function(){
		company_management();
	}
	$scope.company_product = function(){
		company_product();
	}
	$scope.company_site = function(){
		company_site();
	}


	company_design = function(){
		$scope.diagonalImage_class = "iid_company_design";
		$scope.diagonalImage_title = "Design";
		$scope.diagonalImage_body = "a meeting with K’NEX design team \
				taking you through an extensive \
				briefing process ensures unprecedented \
				customisation of your space...";
	}
	company_management = function(){
		$scope.diagonalImage_class = "iid_company_management";
		$scope.diagonalImage_title = "Management";
		$scope.diagonalImage_body = "once the necessary paperwork is \
				signed, work shifts from design studio \
				to management where technical \
				drawings are produced for...";
	}
	company_product = function(){
		$scope.diagonalImage_class = "iid_company_product";
		$scope.diagonalImage_title = "Product";
		$scope.diagonalImage_body = "product guarantees ensure that only the \
				finest in kitchen, wardrobe and component \
				products are offered to our niche clientele...";
	}
	company_site = function(){
		$scope.diagonalImage_class = "iid_company_site";
		$scope.diagonalImage_title = "Site";
		$scope.diagonalImage_body = "our project manager will do independent \
				inspections of the site before giving \
				the delivery instruction. upon delivery...";
	}

	if($state.current.data != null && $state.current.data.func != null){
		var func_name = $state.current.data.func;
		var fn = window[func_name];
		fn();
	}
});