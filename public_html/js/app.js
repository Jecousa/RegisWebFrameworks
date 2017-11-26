
//Module
var ratingApp = angular.module('ratingApp', ['ngRoute']);
var cameraApp = angular.module('cameraApp', ['ngRoute']);
//controller 

ratingApp.controller('viewRatings', ['$scope', function($scope){
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
        
        $scope.ratings=[{
        id: 1,
        userName: 'Steve',
        rating: 5,
        comments:'Excellent!'
    },
    {
        id: 2,
        userName: 'Anne',
        rating: 3,
        comments:'It was very meh'
    },
    {
        id: 3,
        userName: 'Lisa',
        rating: 2,
        comments:'It was pretty bad'
    }];
}]);

ratingApp.controller('viewRatingDetails', ['$scope', '$routeParams',
    function ($scope, $idRoute){
        var reviewID = $idRoute.reviewID;
        $scope.reviewID = reviewID;
    }]);

ratingApp.config(['$routeProvider',
    function($providerRoute){
        $providerRoute.when('/reviews',{
            templateUrl:'partials/reviews-list.html',
            controller: 'viewRatings'
        }).
                when('/reviews/:reviewID',{
                    templateUrl: 'partials/reviews-details.html',
                    controller: 'viewRatingDetails'
        }).
                otherwise({
                    redirectTo:'/reviews'
        });
    }]);

//Week 5 Controller

cameraApp.controller('cameraList',
['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
        
        var cameraID = $routeParams.cameraID;
        
        $http.get("/services/cameras.php", {params: {'id': cameraID}})
                .then(function (response) {
                    $scope.camera = response.data;
        },
        function errorCallback(response) {
            $scope.error = response.data;
        });
}]);