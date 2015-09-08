var app = angular.module('app', []);

app.service('mathService', function() {
    this.add = function(a, b) { return a + b };
    
    this.subtract = function(a, b) { return a - b };
    
    this.multiply = function(a, b) { return a * b };
    
    this.divide = function(a, b) { return a / b };
});

app.service('calculatorService',function(mathService){
	this.square = function(num){
		return mathService.multiply(num, num);
	}
	this.cube = function(num){
		return mathService.multiply(num, mathService.multiply(num, num));
	}
})

app.controller('CalculatorController', function($scope, calculatorService){
	$scope.num=10;
	$scope.square = calculatorService.square;
	$scope.cube = calculatorService.cube;
})