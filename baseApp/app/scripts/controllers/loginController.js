'use strict';

angular.module('baseApp')
  .controller('loginController', ['$http','$rootScope', function($http, $rootScope) {
    var vm = this;
    vm.user = {
        // inputUserName: '',
        // inputPassword: ''
    };

    // vm.user.inputUserName = 'vicente';
    // vm.user.inputPassword = '1234';

    vm.login = login;

    function login(){
        console.log('asdasdasd');
        console.log(vm.user.inputUserName);
		Parse.User.logIn(vm.user.inputUserName, vm.user.inputPassword, {
                  	success: userLoggedIn,
                    error: gotError
                  });
	}
	function userLoggedIn(user){
    window.location = "#/home";
  }

	function gotError(user, err) {
		console.log("KO ", err);
		// alert("Error");
	}

}]);
