(function() {

    'use strict';

    angular
        .module('app.components')
        .directive('onlyDate', OnlyDate);

    function OnlyDate() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(inputValue) {

                    function removeLastChar() {
                        inputArray.pop();
                        newValue = inputArray.join('');
                        modelCtrl.$setViewValue(newValue);
                        modelCtrl.$render();
                    }

                    if (!inputValue) return '';
                    var newValue = inputValue;
                    var inputArray = inputValue.split('');
                    var lastChar = inputArray[inputArray.length - 1];
                    var lastCharIndex = inputArray.lastIndexOf(lastChar);

                    if (lastCharIndex == 2 || lastCharIndex == 5) {
                        if (!/\./.test(lastChar)) {
                            removeLastChar();
                        }

                    } else if (!/\d/.test(lastChar) || inputValue.length > 10) {
                        removeLastChar();
                    }

                    return newValue;
                });
            }
        };
    }
}());