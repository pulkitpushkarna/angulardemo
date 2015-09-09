var myApp=angular.module("MyApp",[])

myApp.directive('userInfo', function() {
	var directive = {};
	directive.restrict = 'E';
	directive.templateUrl = "partials/userinfo-template.html";
	directive.scope = {
		user: "=user"
	}
	return directive;
});
myApp.controller("MyController", function($scope, $http) {
	$scope.pulkit={
		firstName:"Pulkit",
		lastName:"Pushkarna"
	}
	$scope.manish={
		firstName:"Manish",
		lastName:"Kapoor"
	}
	$scope.jeetu={
		firstName:"Jitendar",
		lastName:"Singh"
	}
});