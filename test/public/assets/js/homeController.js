
app.controller('homeController', ['$scope', '$http', function($scope, $http) {
    $scope.logout = logout;
    $scope.init = init;


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
