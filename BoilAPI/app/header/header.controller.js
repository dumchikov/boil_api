(function () {
    'use strict';

    angular
        .module('app.header')
        .controller('Header', Header);

    Header.$inject = [ '$rootScope', '$scope', '$location', '$state', 'AuthenticationService', 'BreadcrumbsService', 'ProductRes'];

    function Header( $rootScope, $scope, $location, $state, AuthenticationService, BreadcrumbsService, ProductRes) {
        var vm = this;

        vm.res = ProductRes;

        var init = function () {
            vm.breadcrumbs = BreadcrumbsService.getBreadcrumbs();
            var currentUser = AuthenticationService.getCurrentUser();
            vm.username = currentUser ? currentUser.username : '';
            vm.isAuthenticated = AuthenticationService.isAuthenticated();
        }

        function onStateChangeStart(event, toState) {
            init(toState.breadcrumbs);
        }

        init();

        vm.logoff = function () {
            AuthenticationService.clearCredentials();
            $state.go('login');
        };

        $rootScope.$on('$stateChangeStart', onStateChangeStart);
    }
})();