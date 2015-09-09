var app = angular.module('app', []);

app.controller('CustomFiltersDemoController', function($scope){
	
	$scope.words = ["hello", "how", "are", "you"];
	
})

app.filter('reverseArray', function () {
    return function (inputArray) {
        return inputArray.reverse();
    };
});