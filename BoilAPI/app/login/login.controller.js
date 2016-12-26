(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('Login', Login);

    Login.$inject = ['$state', 'AuthenticationService'];

    function Login($state, AuthenticationService) {
        var vm = this;
        vm.user = {};
        vm.error = '';

        vm.login = function () {
            AuthenticationService.login(vm.user.username, vm.user.password, function (result) {
                if (result.success) {
                    AuthenticationService.setCredentials(vm.user.username, vm.user.password);
                    $state.go('productsList');
                } else {
                    vm.error = result.message;
                }
            });
        };
    }
})();