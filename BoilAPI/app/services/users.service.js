(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {

        var getUserByName = function (username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
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
            getUserByName: getUserByName
        };
    }
})();
