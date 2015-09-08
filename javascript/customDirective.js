var myApp=angular.module("MyApp",[])

myApp.directive('userInfo', function() {
	var directive = {};
	directive.restrict = 'E';
	directive.template = "User: <b> {{user.firstName}}</b> <b> {{user.lastName}}</b>";
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
});