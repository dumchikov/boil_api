(function () {
    'use strict';

    angular
        .module('app.products')
        .controller('EditProduct', EditProduct);

    EditProduct.$inject = [
        '$rootScope', '$modal', '$window',
        '$scope', '$stateParams', '$location',
        '$filter', 'ProductsService', 'CategoriesService',
        'BreadcrumbsService',
        'ProductRes'
    ];


    function EditProduct($rootScope, $modal, $window, $scope, $stateParams, $location, $filter, ProductsService, CategoriesService, BreadcrumbsService, ProductRes) {

        var vm = this;
        var id = $stateParams.id;

        vm.res = ProductRes;

        vm.product = {};
        vm.categories = [];

        vm.newTimer = {};

        vm.addTimer = function () {
            vm.product.timers.push({ description: vm.newTimer.description, duration: vm.newTimer.duration });
            vm.newTimer = {};
        };

        vm.save = function (form) {
            if (form.$valid) {
                if (vm.product.id == 'new') {
                    var newProduct = new ProductsService(vm.product);
                    newProduct.$save().then(function () {
                        $location.path('/products');
                    });
                } else {
                    ProductsService.update({ id: id }, vm.product).$promise.then(function () {
                        $location.path('/products');
                    });
                }
            } else {
                openModal(form);
            }
        };

        vm.cancel = function () {
            $location.path('/products');
        };


        $scope.$watch('vm.product.title', function (val) {
            BreadcrumbsService.customizeCurrent(val);
        });

        var openModal = function (form) {
            vm.$modalInstance = $modal.open({
                animation: true,
                templateUrl: 'errorsModal.html',
                controller: 'ErrorModal',
                size: 'sm',
                resolve: {
                    form: function () {
                        return form;
                    }
                }
            });
        };

        var init = function () {
            CategoriesService.getAllCategories().then(function (categories) {
                vm.categories = categories;
                if (id != 'new') {
                    ProductsService.get({ id: id }, function (product) {
                        vm.product = product;
                    });
                } else {
                    vm.product = { id: 'new', category: vm.categories[0], timers: [] };
                    console.log(vm.product);
                }
            });
        }

        init();
    }
})();