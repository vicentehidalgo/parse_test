
app.controller('globalController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $rootScope.global_menu = [
          {title:'SignUp', url:'#/signUp'},
          {title:'Login', url:'#/login'}
        ];
	$scope.init = function(){
    // console.log('asdasdadasd');
	    if (Parse.User.current() != null){
	    	window.location = "#/home";
	    } else {
	    	window.location = "#/login";
	    }
  	}
}]);
