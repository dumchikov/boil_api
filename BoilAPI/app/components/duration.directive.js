(function () {

    'use strict';

    angular
        .module('app.components')
        .directive('duration', Duration);

    Duration.$inject = ['$filter', '$window'];

    function Duration($filter, $window) {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs) {
                element.parent().append("<span></span");
                scope.$watch(attrs.ngModel, function (v) {
                    var duration = $window.parseInt(v) ? $filter('timeDuration')(v) : '&nbsp;';
                    element.next().replaceWith("<span>" + duration + "</span");
                });
            }
        };
    }

}());




