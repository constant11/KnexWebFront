myApp.controller('PhoneBookCtrl', function($scope, $http, $location, $route, $routeParams) {

	console.log("Hello From PhoneBookCtrl");
	console.log($routeParams.contactid);
	$scope.message = "Default";

	$scope.headerLabels = [{'label':'Name'},{'label':'Address'},
							{'label':'Telephone No'},{'label':'Cellphone No'},
							{'label':'Birthday'},{'label':'Action'}];	
	
	var yearnow = new Date().getFullYear();
	$scope.years = [];
	for(var x = 1950; x <= yearnow; x++){
		$scope.years.push({'val':x});
	}
	
	$scope.months = [{'val':'1','dis':"January"}, {'val':'1','dis':"February"}, {'val':'1','dis':"March"}, 
					{'val':'1','dis':"April"}, {'val':'1','dis':"May"}, {'val':'1','dis':"June"}, 
					{'val':'1','dis':"July"}, {'val':'1','dis':"August"}, {'val':'1','dis':"September"}, 
					{'val':'1','dis':"October"}, {'val':'1','dis':"November"}, {'val':'1','dis':"December"}];
	
	$scope.days = [];
	for(var x = 1; x <= 31; x++){
		$scope.days.push({'val':x});
	}

	//-------------listeners------------
	
	$scope.lsnr_cancel_ls = function(){
		$location.path( '/phonebook' );
	}
	
	$scope.lsnr_create_ev = function (id){
		$location.path( '/phonebook/create/' );
	}
	
	$scope.lsnr_edit_ev = function (id){
		$location.path( '/phonebook/edit/'+id );
	}
	
	$scope.lsnr_delete_ls = function (id){
		$http.delete("/phoneBook/"+id)
		.success(function (response){
			$scope.listview();
		});
	}		
	
	$scope.lsnr_save_ls = function(id){
		if(id == undefined){
			$http.post("/phoneBook", $scope.contactDetails);
		}
		else{
			$http.put("/phoneBook/"+$scope.contactDetails._id,$scope.contactDetails)
		}
		$location.path( '/phonebook' );
	}	
	
	//-------------listeners end------------

	
	$scope.renderPhoneBook = function (response){
		console.log(response);
		$scope.message = "Phone Book";
		var temp = [];
		angular.forEach(response, function(value, key) {
			temp = response[key];
			temp.completename = value.givenname+' '+value.middlename+' '+value.familyname;
			temp.completeaddress = value.preaddress+' '+value.city+' '+value.province+' '+value.country;

		});
		$scope.contactsDetails = response;
	}
	
	$scope.listview = function(){
		$http.get("/phoneBook")
		.success($scope.renderPhoneBook);
	}
	
	$scope.createview = function (){
		$scope.message = "Create New Contact";
	}	
	
	$scope.editview = function (){
		$scope.message = "Edit Contact";
		$http.get("/phoneBook/"+$routeParams.contactid)
		.success(function (response){
			$scope.contactDetails = response;
		});
	}	
	
	$scope[$route.current.functionName]();
});