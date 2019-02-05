(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('bymapCtrl', bymapCtrl);
    bymapCtrl.$inject = ['$scope', 'alumniService'];
    function bymapCtrl($scope, alumniService) {
        $scope.newLocation = {};
        $scope.Locationarr = [];
        function loadInitialBymap() {
            alumniService.getAllStudentLoc(function (err, res) {
                if (!err) {
                    $scope.locationarr = res.data;
                }
            })
        }
        loadInitialBymap();
    };
})();