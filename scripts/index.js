var PIAPP = angular.module('PIAPP', []);

PIAPP.controller('PIAPPCtrl', function ($scope, $http, $window) {


    $scope.test="HELLO WORLD";
    $scope.testFunction=function(){
        $scope.test="changed";
    }



});
