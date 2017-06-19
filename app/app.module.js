var app = angular.module("sky-temple", []);

app.controller("sky-temple-controller", ['$scope', '$http', function($scope, $http) {
    $http.get('assets/js/historyList.json').success(function(historyList) {
        $scope.historyList = historyList;
    }).fail(function(msg) {
        alert(msg);
    });

}]);