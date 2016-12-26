(function () {
    'use strict';

    angular
        .module('app.products')
        .controller('ErrorModal', ErrorModal);

    ErrorModal.$inject = ['$scope', '$modalInstance', 'form', 'ProductRes'];

    function ErrorModal($scope, $modalInstance, form, ProductRes) {

        $scope.res = ProductRes;
        $scope.productForm = form;
        $scope.close = function () {
            $modalInstance.close();
        };

    }
})();