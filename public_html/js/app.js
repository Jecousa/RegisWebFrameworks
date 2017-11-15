
//Module
var ratingApp = angular.module('ratingApp', []);

//controller 

ratingApp.controller('viewRatings', ['$scope', function($scope){
       $scope.rating={
        userName: 'Steve',
        rating: 5,
        comments:'Excellent!'
    };
}]);