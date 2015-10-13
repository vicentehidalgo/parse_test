
app.controller('globalController', ['$scope', '$http', function($scope, $http) {

  $scope.init = function(){
    // console.log('asdasdadasd');
    if (Parse.User.current() != null){
    	window.location = "#/home";
    } else {
    	window.location = "#/login";
    }
  }
}]);
