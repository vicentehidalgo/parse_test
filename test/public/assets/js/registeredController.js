
app.controller('registeredController', ['$scope', '$http', function($scope, $http) {
    $scope.logout = logout;

    function logout() {
      Parse.User.logOut();
      console.log("OK");
    }
}]);
