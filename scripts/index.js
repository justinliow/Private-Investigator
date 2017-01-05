var PIAPP = angular.module('PIAPP', []);

PIAPP.controller('PIAPPCtrl', function ($scope, $http, $window) {
    $scope.photoSearch=function(type){
        for(var i=0; i<$scope.photos.length; i++){
            if($scope.photos[i].type==type){
                console.log($scope.photos[i].url)
                return $scope.photos[i].url;

            }
        }
        console.log("null");
        return null;


    }
    $scope.submitEmail=function(email){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.fullcontact.com/v2/person.json?email="+JSON.stringify($scope.email),
            "method": "GET",
            "headers": {
                "x-fullcontact-apikey": "583052e807c0615d",
                "cache-control": "no-cache",
                "postman-token": "5957d0ea-b9b2-c4c4-4eeb-5d59459dff03"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            $scope.response=response;
            $scope.status=$scope.response.status;

            $scope.socialProfiles=$scope.response.socialProfiles;
            $scope.photos=$scope.response.photos;

        });



        

    }




});
