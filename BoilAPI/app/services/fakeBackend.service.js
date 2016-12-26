(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('FakeBackend', FakeBackend);

    FakeBackend.$inject = ['$httpBackend', 'ProductsRepository'];

    function FakeBackend($httpBackend, productsRepository) {

        var init = function () {
            productsRepository.init();

            $httpBackend.whenGET(/\.html$/).passThrough();

            $httpBackend.whenGET('api/products').respond(function (method, url, data) {
                var products = productsRepository.getAll();
                return [200, products, {}];
            });

            $httpBackend.whenGET(/api\/products\/.*$/).respond(function (method, url, data) {
                var pathArray = url.split('/');
                var id = pathArray[pathArray.length - 1];
                var product = productsRepository.getById(id);
                return [200, product, {}];
            });

            $httpBackend.whenPOST("api/products").respond(function (method, url, data) {
                productsRepository.create(angular.fromJson(data));
                return [201, {}, {}];
            });

            $httpBackend.whenPUT(/api\/products\/.*$/).respond(function (method, url, data) {
                var pathArray = url.split('/');
                var id = pathArray[pathArray.length - 1];
                productsRepository.edit(id, angular.fromJson(data));
                return [200, {}, {}];
            });

            $httpBackend.whenDELETE(/api\/products\/.*$/).respond(function (method, url, data) {
                var pathArray = url.split('/');
                var id = pathArray[pathArray.length - 1];
                productsRepository.remove(id);
                return [200, {}, {}];
            });

            $httpBackend.whenGET(/api\/users\/.*$/).respond(function (method, url, data) {
                var user = {
                    username: 'test',
                    password: 'test'
                }

                return [200, user, {}];
            });

            $httpBackend.whenGET("/api/categories/").respond(
                function (method, url, data) {
                    var categories = [
                        { id: 1, name: 'Meat' },
                        { id: 2, name: 'Seafood' },
                        { id: 3, name: 'Vegetables' },
                        { id: 4, name: 'Fruits' }
                    ];

                    return [200, categories, {}];
                }
            );
        };

        return {
            init: init
        };
    }
})();