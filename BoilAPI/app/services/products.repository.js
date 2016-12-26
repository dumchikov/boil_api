(function () {
    'use strict';

    angular.module('app.services')
        .factory('ProductsRepository', function (localStorageService, $filter) {

            var repo = {};

            repo.init = function() {
                var products = localStorageService.get('products');
                if (!products) {
                    localStorageService.set('products', [
                        {
                            id: 1,
                            title: "AngularJS",
                            creationDate: "1288444623006",
                            description: "HTML enhanced for web apps!",
                            category: 1,
                            timers: [
                                { description: "timer 20min", duration: 20}
                            ]
                        },
                        {
                            id: 2,
                            title: "BackboneJS",
                            creationDate: "1288555623006",
                            description: "Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.",
                            category: 2,
                            timers: [
                                { description: "timer 20min", duration: 20 }
                            ]
                        },
                        {
                            id: 3,
                            title: "KnockoutJS",
                            creationDate: "1288888623006",
                            description: "Simplify dynamic JavaScript UIs with the Model-View-View Model (MVVM)",
                            category: 3,
                            timers: [
                                { description: "timer 20min", duration: 20 }
                            ]
                        },
                        {
                            id: 4,
                            title: "Dojo",
                            creationDate: "1288377723006",
                            description: "A JavaScript toolkit that saves you time and scales with your development process.",
                            category: 4,
                            timers: [
                                 { description: "timer 20min", duration: 20 }
                            ]
                        }
                    ]);
                }
            };

            repo.getAll = function() {
                var products = localStorageService.get('products');
                return products;
            };

            repo.getById = function(id) {
                var products = localStorageService.get('products');
                var product = $filter('filter')(products, { id: id })[0];
                return product;
            };

            repo.create = function (product) {
                var products = localStorageService.get('products');
                var last = products[products.length - 1].id;
                product.id = ++last;
                products.push(product);
                localStorageService.set('products', products);
            };

            repo.edit = function (id, product) {
                var products = localStorageService.get('products');
                var productDst = $filter('filter')(products, { id: id })[0];
                angular.extend(productDst, product);
                localStorageService.set('products', products);
            };

            repo.remove = function(id) {
                var products = localStorageService.get('products');
                var product = $filter('filter')(products, { id: id })[0];
                var index = products.indexOf(product);
                products.splice(index, 1);
                localStorageService.set('products', products);
            };

            return repo;
        });
})();