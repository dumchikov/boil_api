(function () {
    'use strict';

    angular
        .module('app')
        .config(configAppRouter)
        .run(runApp);

    function configAppRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'Login',
                controllerAs: 'vm'
            })
            .state('productsEdit', {
                url: '/products/:id',
                templateUrl: 'app/products/edit-product.html',
                controller: 'EditProduct',
                controllerAs: 'vm',
                data: {
                    breadcrumbs: { path: [{ name: "Продукты", link: '#/products' }], current: { name: "" } }
                },
                requiresLogin: true 
            })
            .state('productsList', {
                url: '/products',
                templateUrl: 'app/products/products.html',
                controller: 'Products',
                controllerAs: 'vm',
                data: {
                    breadcrumbs:  { path: [], current: { name: "Продукты" } }
                },
                requiresLogin: true
            });
    }

    function runApp($rootScope, $state, AuthenticationService, FakeBackend, BreadcrumbsService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.requiresLogin && !AuthenticationService.isAuthenticated()) {
                event.preventDefault();
                $state.go('login');
            }
            
            if (toState.data)
                BreadcrumbsService.setBreadcrumbs(toState.data.breadcrumbs);
        });

        //FakeBackend.init();
    }

}())