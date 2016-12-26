(function () {

    angular
        .module('app.components')
        .filter('timeDuration', TimeDurationFilter);

    function TimeDurationFilter() {
        return function (input) {
            var hours = Math.floor(input / 60);
            var minutes = input % 60;
            return hours + 'h ' + minutes + 'min';
        };
    }

}());