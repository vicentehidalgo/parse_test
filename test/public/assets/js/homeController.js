
app.controller('homeController', ['$scope', '$http', function($scope, $http) {
    $scope.logout = logout;
    $scope.init = init;
    $scope.user = Parse.User.current();

    console.log("user", $scope.user);


    function logout() {
      Parse.User.logOut();
      console.log("OK");
      window.location = "#/login";
    }

    function init(){
      if (Parse.User.current() == null){
      	window.location = "#/login";
      }else{

      }
    }

}]);
