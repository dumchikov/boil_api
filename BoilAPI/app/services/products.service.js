(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('ProductsService', ProductsService);

   ProductsService.$inject = ['$resource'];

    function ProductsService($resource) {
            
        var productsRes = $resource('api/products/:id', {}, {
            update: {
                method: 'PUT'
            }
        });

        return productsRes;
    }
})();