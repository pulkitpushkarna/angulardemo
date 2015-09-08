var myApp= angular.module("MyApp",[])

myApp.controller("MyController",function($scope){
$scope.myVal="Hello from controller"

})

myApp.controller("MyController2",function($scope){
$scope.myVal="Hello from controller2"

})

myApp.controller("MyController3",[ "$scope",function(abc){
abc.myVal="Hello from controller3"

}])
