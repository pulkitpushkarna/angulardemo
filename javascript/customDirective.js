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

myApp.directive("attributeDirective",function(){
  return {
  	restrict:"E",
  	template:"<h1>Hello from Attribute Directive </h1>"
  }

});

myApp.directive("elementDirective",function(){
  return {
  	restrict:"A",
  	template:"<h1>Hello from Element Directive </h1>"
  }

});

myApp.directive("classDirective",function(){
  return {
  	restrict:"C",
  	template:"<h1>Hello from Class Directive </h1>"
  }

});
