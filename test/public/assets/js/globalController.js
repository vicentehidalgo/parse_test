
app.controller('globalController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

$rootScope.nombre = "estoy en otro sitio";
  $scope.init = function(){
    // console.log('asdasdadasd');
    if (Parse.User.current() != null){
    	window.location = "#/home";
    } else {
    	window.location = "#/login";
    }
  }
}]);
