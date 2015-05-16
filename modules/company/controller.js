app.controller('CompanyCtrl', function($state, $scope, $http, $location, $stateParams, $sce) {

	console.log("Hello From CompanyCtrl");

	$scope.moduleNav = [{'label':'Design', 'ref':'company.company_design'},{'label':'Management', 'ref':'company.company_management'},
							{'label':'Site', 'ref':'company.company_site'}, {'label':'Product', 'ref':'company.company_product'}];

	// $scope.diagonalImage_class = "iid_company_design";

	$('#long_txt_cont').perfectScrollbar(); 
	$scope.company = function(){
		company();
	}
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


	$scope.show_more = function(){
		$("#desc_min").addClass("hide");
		$("#desc_max").removeClass("hide");
		$('#long_txt_cont').perfectScrollbar();
		$('#long_txt_cont').perfectScrollbar('update'); 
		console.log("sdasdsads");
	}

	$scope.show_less = function(){
		$("#desc_min").removeClass("hide");
		$("#desc_max").addClass("hide");
	}

	company = function(){
		$scope.diagonalImage_class = "iid_homepage";
		$scope.diagonalImage_title = "Company";
		$scope.diagonalImage_body = "K'nex Modular Furniture Design is composed of specialist cabinetry architects, \
									offering locally designed and manufactured kitchen cabinets, closet cabinets \
									and the likes for a niche clientele. Our core focus is on the functionality of \
									our furniture's, ensuring that all demands of the client are met.";
		$scope.diagonalImage_body_max = $sce.trustAsHtml("K'nex Modular Furniture Design is composed of specialist cabinetry architects, \
									offering locally designed and manufactured kitchen cabinets, closet cabinets \
									and the likes for a niche clientele. Our core focus is on the functionality of \
									our furniture's, ensuring that all demands of the client are met. <br><br>\
									K'nex was founded in later part of the year 2014, by architects and businessmen \
									whose mission is to produce custom designed cabinets that would meet the functional \
									demands of modern living. This mission is to be achieved while striving to create \
									an experience born and maintained through communication and professional interaction \
									with the client. Over the past few months of our journey, K'nex has managed to \
									solidify itself as a strong competitor for modern contemporary cabinetries in the \
									province of Cebu. With this, K'nex clients can be assured of designs that will not \
									only boast aesthetic appeal but also proportionality, ergonomics, relational \
									interaction, functionality and going above and beyond each clients expectations. <br><br>\
									Today, K'nex focuses on the development of its core competitive advantage which is \
									producing functional products with high standards. This simply means that K'nex \
									Modules are fully equipped, not only in terms of the design layout, but also in \
									ensuring that athe users experience is enhanced and not hindered. That every cabinet \
									has been thought through and all internal inserts needed to make the space \
									functional, included. Furthermore in order to ensure modern classy design, all raw \
									materials are sourced internationally, and manufactured locally. This enables K'nex \
									to determine the best possible use of each new material launched internationally. A \
									coordinated approach from the briefing and design phase right through to the \
									installation phase, helps to ensure customized, relational and ultimately functional \
									solutions, product and workmanship. These guarantees are combined with professional \
									communication interaction, assuring a return of investment and an overall hassle-free \
									experience for every K'nex client.");
	}
	company_design = function(){
		$scope.diagonalImage_class = "iid_company_design";
		$scope.diagonalImage_title = "Design";
		$scope.diagonalImage_body = "a meeting with K'NEX design team taking you through an extensive \
									briefing process ensures unprecedented customization of your space...";
		$scope.diagonalImage_body_max = $sce.trustAsHtml("the brief <br>\
									a meeting with K'NEX design consultants taking you through an extensive <br><br> \
									briefing <br>\
									process ensures unprecedented customization of your space and an assurance \
									that your requirements are met. K'NEX is will help recommend the best \
									suited appliances for your design. <br><br>\
									the design <br>\
									the designer will then conceptualize cabinetry using local and international \
									design standards and collections ensuring functionality, ergonomics and \
									ultimately a relational living space that will integrate both visually and \
									practically with the rest of your space. the philosophy of relational living, \
									achieved through zone planning, is employed at each stage of the design process. <br><br>\
									the presentation <br>\
									presented in photo realistic 3d , you have the opportunity to discuss further \
									customization and  budget requirements while you are walked through your \
									conceptualized living space at a follow up  meeting at our showroom. this process \
									continues until the design and costing has met all your  requirements enabling the \
									process to continue to the sign-off phase.");
	}
	company_management = function(){
		$scope.diagonalImage_class = "iid_company_management";
		$scope.diagonalImage_title = "Management";
		$scope.diagonalImage_body = "once the necessary paperwork is signed, work shifts from design studio to \
									management where technical drawings are produced for...";
		$scope.diagonalImage_body_max = $sce.trustAsHtml("sign-off <br>\
									once the necessary paperwork is signed, work shifts from design studio to management \
									where technical drawings are produced for the detailed briefing of other stakeholders \
									in the project. <br><br>\
									site preparation <br>\
									a dedicated project manager together with your design consultant ensures that all \
									critical water and electrical points are placed correctly while overseeing that the \
									final wall measurements correspond with the original plans. <br><br>\
									site management <br>\
									as one point of reference, your project manager communicates all timelines and other \
									relevant information. he assesses site readiness to protect your investment once \
									delivered and installed in your space, giving you an overall hassle-free experience.");
	}
	company_product = function(){
		$scope.diagonalImage_class = "iid_company_product";
		$scope.diagonalImage_title = "Product";
		$scope.diagonalImage_body = "product guarantees ensure that only the finest in kitchen, wardrobe and component \
										products are offered to our niche clientele...";
		$scope.diagonalImage_body_max = $sce.trustAsHtml("product guarantees ensure that only the finest in kitchen, \
									wardrobe and component products are offered to our niche clientele. K'NEX maintains \
									that all products must be aesthetically functional, \"make ideas happen\" ,this \
									focus offers confidence to our clients that every detail of the product is thought \
									through and carefully considered, assuring clientele wishes and ensuring durability \
									and longevity. <br/><br/>\
									cabinetry is defined by precision, quality and functionality. each component that \
									makes up a K'NEX cabinet has been thought through; from the machined edging to the \
									custom two tone motif, providing the essential aesthetic element. all kitchen and \
									cabinetry units are constructed using MDF & PB water-resistant boards, ensuring \
									unrivalled quality and longevity of your product. all K'NEX cabinets display expert \
									planning, state-of-the-art technology and 21st century craftsmanship, creating \
									durable and unrivaled cabinet quality. <br><br>\
									K'NEX fittings and accessories uses wide varied of brands to suit a reasonable yet \
									functional products. <br><br>\
									finishes define the overall design and is therefore essential that all materials \
									used are timeless in appeal. K'NEX offers 20 different range of imported UV Coated \
									Melamine finishes, from high gloss to matt. <br><br>\
									all surface tops suppliers and sub contractor are properly, briefed for product consistency; <br>\
									all glass back splash and doors are specified tempered, ensuring a safe and durable \
									product and come in a gloss or matt finish. <br><br>\
									all timbers are specified to companies that offer durable and quality product; <br>\
									laminates are an extremely durable and hard-wearing finish and offer a wide range of \
									custom colors and textures in either a matt or gloss finish.");
	}
	company_site = function(){
		$scope.diagonalImage_class = "iid_company_site";
		$scope.diagonalImage_title = "Site";
		$scope.diagonalImage_body = "our project manager will do independent inspections of the site before giving \
									the delivery instruction. upon delivery...";
		$scope.diagonalImage_body_max = $sce.trustAsHtml("delivery <br>\
									our project manager will do independent inspections of the site before giving the \
									delivery instruction. upon delivery,  units are unwrapped and inspected before \
									installation begins. <br><br>\
									Installation <br>\
									installations are carried out by qualified, permanent K'NEX installers and overall \
									progress is managed by the project manager. kitchen, wardrobe and component \
									installation timelines will be communicated in advance and all the elements are \
									finally wrapped to ensure your investment is protected. <br><br>\
									after sales service <br>\
									together with our 1 year K'NEX product guarantee and 1 year K'NEX workmanship guarantee, \
									we service your installation 1 month, 3 months, 12 months and 24 months after handover \
									to ensure the settling-in period is effortless, leading to an overall hassle-free experience.");
	}

	if($state.current.data != null && $state.current.data.func != null){
		console.log($state.current.data.func);
		var func_name = $state.current.data.func;
		var fn = window[func_name];
		fn();
	}
});