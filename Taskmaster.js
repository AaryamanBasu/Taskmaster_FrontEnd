var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:' Give it a shot !', done:false}];

    $scope.todoAdd = function() {
      if ($scope.todoInput != "") {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
      }
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
