var myApp=angular.module("MyApp",[])

myApp.controller("MyController",function($scope){
$scope.msg="Hello world";
	$scope.call=function(){
       alert($scope.msg);
	}	
})