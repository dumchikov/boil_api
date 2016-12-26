(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('CategoriesService', CategoriesService);

    CategoriesService.$inject = ['$http'];

    function CategoriesService($http) {

        var getAllCategories = function () {
            return $http.get('/api/categories/').then(handleSuccess, handleError('Error getting all categorys'));
        };

        function handleSuccess(response) {
            return response.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }

        return {
            getAllCategories: getAllCategories
        };
    }
})();
