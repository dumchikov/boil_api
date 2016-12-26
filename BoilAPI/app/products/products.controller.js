(function () {
    'use strict';

    angular
        .module('app.products')
        .controller('Products', Products);

    Products.$inject = [
        '$filter',
        '$state',
        '$log',
        '$location',
        '$modal',
        'ProductsService',
        'ProductRes',
        'CategoriesService'];

    function Products($filter, $state, $log, $location, $modal, ProductsService, ProductRes, CategoriesService) {

        var vm = this;
        vm.res = ProductRes;

        vm.getProducts = function () {
            return ProductsService.query(function (data) {
                vm.products = data;
            });
        }

        CategoriesService.getAllCategories()
            .then(function (categories) {
                categories.unshift(vm.category);
                vm.categories = categories;
            });

        vm.getProducts();

        vm.products = [];

        vm.categories = [];

        vm.searchTerms = '';
        vm.category = { "name": "Все", type: null };

        vm.search = function () {
            vm.getProducts().$promise.then(function () {
                var result = vm.products;
                if (vm.searchTerms) {
                    result = $filter('filter')(result, function (product) {
                        return product.title.toLowerCase().indexOf(vm.searchTerms.toLowerCase()) != -1;
                    });
                }
                if (vm.category && vm.category.type) {
                    result = $filter('filter')(result, function (product) {
                        return  product.category.type === vm.category.type;
                    });
                }

                vm.products = result;
            });
        }

        vm.add = function () {
            $location.path('/products/new');
        };

        vm.edit = function (id) {
            $location.path('/products/' + id);
        };

        vm.openModal = function (id, name) {

            var modal = $modal.open({
                animation: true,
                templateUrl: 'deleteModal.html',
                controller: 'DeleteModal',
                size: 'sm',
                resolve: {
                    id: function () {
                        return id;
                    },
                    name: function () {
                        return name;
                    }
                }
            });

            if (modal) {
                modal.result.then(function (productId) {
                    ProductsService.remove({ id: productId }).$promise.then(function () {
                        $state.go($state.current, {}, { reload: true });
                    });
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            }
        };
    }
})();