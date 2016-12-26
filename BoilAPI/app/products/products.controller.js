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
        'ProductRes'];

    function Products($filter, $state, $log, $location, $modal, ProductsService, ProductRes) {

        var vm = this;
        vm.res = ProductRes;

        vm.getProducts = function () {
            return ProductsService.query(function (data) {
                vm.products = data;
            });
        }

        vm.getProducts();

        vm.products = [];

        vm.searchTerms = '';

        vm.search = function () {
            vm.getProducts().$promise.then(function () {
                if (vm.searchTerms) {
                    vm.products = $filter('filter')(vm.products, function (product) {
                        return product.title.toLowerCase().indexOf(vm.searchTerms.toLowerCase()) != -1;
                    });
                }
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