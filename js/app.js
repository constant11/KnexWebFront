var app = angular.module('myApp', ['ui.router']);
 
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('company', '/company');
	$urlRouterProvider.when('/', '/w');
    $urlRouterProvider.otherwise('/w');
 
    $stateProvider
		.state('homepage', {
			url:'/w',
			views: {
			  'header': {
				templateUrl: 'public/modules/homepage/views/navigation.html',
				controller: 'HomePageCtrl'
			  },
			  'body': {
				templateUrl: 'public/modules/homepage/views/index.html',
				controller: 'HomePageCtrl'
			  },
			  'footer': {
				templateUrl: 'public/modules/homepage/views/footer.html',
				controller: 'HomePageCtrl'
			  },
			}
		})
		.state('company', {
			url:'/company',
			parent:'homepage',
			views: {
			  'diagonal_navigation@homepage': {
				templateUrl: 'public/modules/company/views/_navigation.html',
				controller: 'CompanyCtrl'
			  },
			  'diagonal_image_container@homepage': {
				templateUrl: 'public/modules/company/views/_diagonal_image.html',
				controller: 'CompanyCtrl'
			  },
			  'footer@': {
				templateUrl: 'public/modules/company/views/footer.html',
				controller: 'CompanyCtrl'
			  },
			},
			data: {
				func: 'company'
			}
		})
		.state('company.company_design', {
			url:'/company_design',
			parent:'company',
			views: {
			  'diagonal_image@company': {
				// templateUrl: 'public/modules/company/views/_diagonal_image.html',
				controller: 'CompanyCtrl'
			  },
			},
			data: {
				func: 'company_design'
			}
		})	
		.state('company.company_management', {
			url:'/company_management',
			parent:'company',
			views: {
			  'diagonal_image@company': {
				// templateUrl: 'public/modules/company/views/_diagonal_image.html',
				controller: 'CompanyCtrl'
			  },
			},
			data: {
				func: 'company_management'
			}
		})		
		.state('company.company_site', {
			url:'/company_site',
			views: {
			  'diagonal_image@company': {
				// templateUrl: 'public/modules/company/views/_diagonal_image.html',
				controller: 'CompanyCtrl'
			  },
			},
			data: {
				func: 'company_site'
			}
		})		
		.state('company.company_product', {
			url:'/company_product',
			views: {
			  'diagonal_image@company': {
				// templateUrl: 'public/modules/company/views/_diagonal_image.html',
				controller: 'CompanyCtrl'
			  },
			},
			data: {
				func: 'company_product'
			}
		})			
		.state('contact_us', {
			url:'/contact',
			parent:'homepage',
			views: {
			  'body@': {
				templateUrl: 'public/modules/_system/contact_us.html'
			  },
			  'footer@': {
				templateUrl: 'public/modules/company/views/footer.html',
				controller: 'CompanyCtrl'
			  },
			}
		})
		.state('showroom', {
			url:'/showroom',
			parent:'homepage',
			views: {
			  'body@': {
				templateUrl: 'public/modules/showroom/views/index.html',
				controller: 'ShowroomCtrl'
			  },				
			}
		})			
		.state('undermaintenance', {
			url:'/undermaintenance',
			parent:'homepage',
			views: {
			  'body@': {
				templateUrl: 'public/modules/_system/undermaintenance.html'
			  },
			  'footer@': {
				templateUrl: 'public/modules/company/views/footer.html',
				controller: 'CompanyCtrl'
			  },
			}
		})	
		.state('services', {
			url:'/services',
			parent: 'homepage',
			views: {
			  // 'header': {
				// templateUrl: 'public/modules/services/views/services.html',
				// controller: 'ServicesCtrl'
			  // },
			  'body@': {
				templateUrl: 'public/modules/services/views/services.html',
				controller: 'ServicesCtrl'
			  }
			  // 'footer': {
				// templateUrl: 'report-graph.html',
				// controller: function($scope){ ... controller stuff just for graph view ... }
			  // },
			}
			
			// templateUrl: 'public/modules/services/views/services.html',sho
			// controller: 'ServicesCtrl'
		})		
		.state('services.detail', {
			url: '/detail',
			views: {
			  // 'header@': {
				// templateUrl: 'public/modules/services/views/services2.html'
			  // },
			  'body': {
				templateUrl: 'public/modules/services/views/services2.html'
			  }
			}
			
			// templateUrl: 'public/modules/services/views/services.html',
			// controller: 'ServicesCtrl'
		})
		.state('phonebook', {
			url:'/phonebook',
			parent: 'services',
			views: {
			  'header@services': {},
			  'body': {
				templateUrl: 'public/modules/phonebook/views/listview.html',
				controller: 'PhoneBookCtrl'
			  }
			  // 'footer': {
				// templateUrl: 'report-graph.html',
				// controller: function($scope){ ... controller stuff just for graph view ... }
			  // },
			}
			// templateUrl: 'public/modules/phonebook/views/listview.html',
			// controller: 'PhoneBookCtrl'
			//functionName: 'listview'
		})
		// .state('services', {
			// url:'/phonebook/create',
			// templateUrl: 'public/modules/phonebook/views/editview.html',
			// controller: 'PhoneBookCtrl'
			// //functionName: 'createview
		// })
		// .state('services', {
			// url:'/phonebook/edit/:contactid',
			// templateUrl: 'public/modules/phonebook/views/editview.html',
			// controller: 'PhoneBookCtrl'
			// //functionName: 'editview'
		// })
 
}]);  

  
// myApp.controller('ServicesCtrl', function($scope) {
     // console.log("scope");
    // $scope.message = 'This is Add new order screen';
     
// });

// function resolveController(path) {
   // var deferred = $q.defer();
   // var script = document.createElement('script');
   // script.src = path;
   // script.onload = function() {
      // $scope.$apply(deferred.resolve());
   // };
   // document.body.appendChild(script);
   // return deferred.promise;
// };

console.log("app.js");