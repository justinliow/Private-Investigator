var PIAPP = angular.module('PIAPP', []);

PIAPP.controller('PIAPPCtrl', function ($scope, $http, $window) {

    $scope.submitEmail=function(email){
        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://api.fullcontact.com/v2/person.json?email="+JSON.stringify($scope.email),
        //     "method": "GET",
        //     "headers": {
        //         "x-fullcontact-apikey": "583052e807c0615d",
        //         "cache-control": "no-cache",
        //         "postman-token": "5957d0ea-b9b2-c4c4-4eeb-5d59459dff03"
        //     }
        // }

        // $.ajax(settings).done(function (response) {
        //     $scope.response=response;

        // });
        $scope.response={
  "status": 200,
  "requestId": "1527ccff-6c8c-4d6c-818f-9d2d9f1a3c71",
  "likelihood": 0.9,
  "photos": [
    {
      "type": "gravatar",
      "typeId": "gravatar",
      "typeName": "Gravatar",
      "url": "https://d2ojpxxtu63wzl.cloudfront.net/static/592f16bf2e8d5bafcad2c9ca6f3c69e0_60557c1393ec66fbe3a4de8d170c750e625987d06d1b5c4fcbe7068d5ca0a01e",
      "isPrimary": true
    },
    {
      "type": "google",
      "typeId": "google",
      "typeName": "GooglePlus",
      "url": "https://d2ojpxxtu63wzl.cloudfront.net/static/81fc203450fa2115f596ce5eb8dde552_b6f8e9d6d8c178bf573af780e7f77e07fd241e0441c6816fab86f54826171fc1"
    }
  ],
  "contactInfo": {
    "familyName": "L",
    "fullName": "K L",
    "givenName": "K"
  },
  "socialProfiles": [
    {
      "type": "github",
      "typeId": "github",
      "typeName": "Github",
      "url": "https://github.com/cliow",
      "username": "cliow"
    },
    {
      "followers": 2,
      "type": "google",
      "typeId": "google",
      "typeName": "GooglePlus",
      "url": "https://plus.google.com/112373321518267465777",
      "id": "112373321518267465777"
    },
    {
      "type": "gravatar",
      "typeId": "gravatar",
      "typeName": "Gravatar",
      "url": "https://gravatar.com/chrisliow",
      "username": "chrisliow",
      "id": "60390460"
    }
  ]
};
        $scope.status=$scope.response.status;

        $scope.socialProfiles=$scope.response.socialProfiles;
        $scope.photos=$scope.response.photos;
        
        
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
    }




});
