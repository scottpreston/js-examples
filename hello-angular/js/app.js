var app = angular.module('hello-angular', []);

app.controller('HelloController', ['$scope', function ($scope) {
    $scope.hello = "hello world";
}]);
