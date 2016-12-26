(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('DeleteModal', DeleteModal);

    DeleteModal.$inject = ['$scope', '$modalInstance', 'id', 'name', 'ProductRes'];

    function DeleteModal($scope, $modalInstance, id, name, ProductRes) {

        $scope.res = ProductRes;
        $scope.id = id;
        $scope.name = name;

        $scope.ok = function() {
            $modalInstance.close(id);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }
})();