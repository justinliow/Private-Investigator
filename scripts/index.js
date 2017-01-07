var PIAPP = angular.module('PIAPP', []);

PIAPP.controller('PIAPPCtrl', function ($scope, $http, $window) {
    $scope.page = 0;

    $scope.photoSearch = function (type) {
        if ($scope.photos == null) {
            return null;
        }
        for (var i = 0; i < $scope.photos.length; i++) {
            if ($scope.photos[i].type == type) {
                // console.log($scope.photos[i].url)
                return $scope.photos[i].url;

            }
        }
        // console.log("null");
        return null;


    }
    $scope.submitEmail = function (email) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.fullcontact.com/v2/person.json?email=" + JSON.stringify($scope.email),
            "method": "GET",
            "headers": {
                "x-fullcontact-apikey": "583052e807c0615d",
                "cache-control": "no-cache",
                "postman-token": "5957d0ea-b9b2-c4c4-4eeb-5d59459dff03"
            },
            "success": function (xml, textStatus, xhr) {
                // console.log(xhr.status);
                // console.log(xml);
                $scope.response = xml;
                $scope.status = xhr.status;
                $scope.socialProfiles = $scope.response.socialProfiles;
                $scope.photos = $scope.response.photos;
            },

            "complete": function (xhr, textStatus) {
                // console.log(xhr.status);
                $scope.status = xhr.status;
                if ($scope.status == 200) {

                }
                else if ($scope.status == 202) {
                    $scope.page = 1;
                    $scope.error = "Your request is currently being processed. You can check again later to see the request has been processed.";
                }
                else if (Math.floor(($scope.status / 100)) == 4) {
                    $scope.page = 1;

                    $scope.error = "Not Found";
                }
                else {
                    $scope.page = 1;

                    $scope.error = "Error";
                }
            }
        }

        $.ajax(settings);



    }


});
