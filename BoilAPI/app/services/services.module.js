(function () {
    'use strict';

    angular
        .module('app.services',
        [
            'ngResource',
            'LocalStorageModule',
            'ngCookies'
        ])
        .config(function (localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('app')
                .setStorageType('localStorage')
                .setNotify(false, false);
        });

})();