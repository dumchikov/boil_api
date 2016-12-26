(function () {
    'use strict';

    angular
        .module('app.header')
        .factory('BreadcrumbsService', BreadcrumbsService);

    function BreadcrumbsService() {

        var breadcrumbs = {};

        var getBreadcrumbs = function () {
            return breadcrumbs;
        }

        var setBreadcrumbs = function (brdcrumbs) {
            breadcrumbs = brdcrumbs;
        }

        var customizeCurrent = function (value) {
            breadcrumbs.current = { name: value };
        }

        return {
            getBreadcrumbs: getBreadcrumbs,
            setBreadcrumbs: setBreadcrumbs,
            customizeCurrent: customizeCurrent
        };
    }
})();
