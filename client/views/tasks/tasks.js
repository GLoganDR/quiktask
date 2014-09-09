(function(){
  'use strict';

  angular.module('quiktask')
  .controller('TasksCtrl', ['$scope', 'Task', 'Priority', function($scope, Task, Priority){
    $scope.title = 'Tasks';
    $scope.task = {};
    $scope.tasks = [];
    $scope.sort = 'due';
    $scope.priorities = [];

    Task.all().then(function(response){
      $scope.tasks = response.data.tasks;
    });

    $scope.add = function(){
      $scope.task.priority = JSON.parse($scope.task.priority);
      Task.create($scope.task).then(function(response){
        $scope.tasks.push(response.data.task);
        $scope.task = {};
      });
    };

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });
  }]);
})();
