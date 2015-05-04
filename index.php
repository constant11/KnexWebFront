<?php

echo "

<html>
<head>
	<title> THE MEAN Stack</title>
	<link href='public/css/bootstrap.css' rel='stylesheet' />
	<script src='public/js/jquery-1.10.2.min.js'></script>
	<script src='public/js/bootstrap.js'></script>
	<script src='public/js/angular.js'></script>
	<script src='public/js/angular-route.js'></script>
	<script src='public/js/app.js'></script>
	<script src='public/modules/services/controller.js'></script>
	<script src='public/modules/phonebook/controller.js'></script>
	<script src='public/js/controller.js'></script>
</head>
<body ng-app='myApp'>
	<div ng-view=''>sadd</div>
	
</body>
</html>

";

?>