var app = angular.module('app', []);

app.service('taskService', function($http) {
	this.fetchTaskList = function(onComplete, onError){
		$http({
			method: 'POST',
			url: "http://localhost:8080/worker/task/list",
			params: {count:0}
		}).then(onComplete, onError);	
	}
	
});

app.controller('TaskListController', function($scope, taskService){
	
	$scope.taskList=[];

	$scope.getTaskList = function(){
		var onComplete=function(response){
			$scope.taskList = response.data;
		}
		var onError = function(reason){
			console.log("reason: ", reason)
		}
		taskService.fetchTaskList(onComplete, onError)
	}
})