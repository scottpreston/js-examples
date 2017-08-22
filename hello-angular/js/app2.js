var app = angular.module('hello-angular', []);

app.controller('HelloController', ['$scope', '$http', function ($scope, $http) {
    $scope.hello = "hello world";
    $scope.model = {list: null};
    $http.get("/data.json").then(function (json) {
        $scope.model.list = json.data.list;
    });
}]);
