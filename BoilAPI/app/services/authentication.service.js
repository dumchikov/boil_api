(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['UserService', '$cookieStore'];

    function AuthenticationService(UserService, $cookieStore) {
        var authKey = "_auth";

        function login(username, password, callback) {

            if (username === "boil" && password === "boil123") {
                callback({ success: true });
            } else {
                callback({ success: false, message: 'Username or password is incorrect' });
            }

            //var response;
            //callback({ success: true });
            //UserService.getUserByName(username)
            //    .then(function (user) {
            //        if (user !== null && user.password === password) {
            //            response = { success: true };
            //        } else {
            //            response = { success: false, message: 'Username or password is incorrect' };
            //        }
            //        callback(response);
            //    });
        }

        function setCredentials(username, password) {
            $cookieStore.put(authKey, { username: username, password: password });
        }

        function clearCredentials() {
            $cookieStore.remove(authKey);
        }

        function getCurrentUser() {
            var usr = $cookieStore.get(authKey);
            return usr;
        }

        function isAuthenticated() {
            return !!getCurrentUser();
        }

        return {
            login: login,
            setCredentials: setCredentials,
            clearCredentials: clearCredentials,
            getCurrentUser: getCurrentUser,
            isAuthenticated: isAuthenticated
        };
    }
})();