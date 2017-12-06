
//Module 
var galleryApp = angular.module('galleryApp', ['ngRoute']);

//Controllers

galleryApp.controller('selectPhoto', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        
        //Filters
          $scope.changeLabel = function(labelText) {
            $scope.displayLabelText = labelText;
        };
        $scope.filterHistory=[];
        $scope.resetFilter = function(){
            $scope.filterHistory.push($scope.filterText);
    $scope.filterText = "Test Filter Delete This...";
        };
        
        $scope.resetFilter();
        $scope.filterHistory=[];

//HTTP Request
        var galleryID = $routeParams.galleryID;

        $http.get("http://localhost/GalleryService/galleries.php", {params: {"id": galleryID}})
                .then(function (response) {
                    $scope.galleries = response.data;
                },
                        function errorCallback(response) {
                            $scope.error = response.data;
                        });
    }]);

galleryApp.controller('detailPhoto', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        var galleryID = $routeParams.galleryID;
        $scope.galleryID = galleryID;
    }]);

 galleryApp.controller('flexslide', ['$scope', '$http',
    function ($scope, $http) {
        
//HTTP Request
        $http.get("http://localhost/GalleryService/cameras.php")
                .then(function (response) {
                    $scope.cameras = response.data;
                },
                        function errorCallback(response) {
                            $scope.error = response.data;
                        });
    }]);
    
//Routing
galleryApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/gallery', {
                    templateUrl: 'partials/gallery-list.html',
                    controller: 'selectPhoto'
                }).when('/gallery/:galleryID', {
            templateUrl: 'partials/gallery-detail.html',
            controller: 'detailPhoto'
        }).when('/camera', {
                    templateUrl: 'partials/gallery-flex.html',
                    controller: 'flexslide'
                }).
                otherwise({
                    redirectTo: '/gallery'
                });
    }]);

//Flexslide

$(function () {
    $('.flexslider').flexslider({
        slideshow: true,
        animation: "slide"
    })
});