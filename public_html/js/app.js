
//Module
var ratingApp = angular.module('ratingApp', []);

//controller 

ratingApp.controller('viewRatings', ['$scope', function($scope){
        $scope.filterHistory=[];
        $scope.resetFilter = function(){
            $scope.filterHistory.push($scope.filterText);
    $scope.filterText = "Test Filter Delete This...";
        };
        
        $scope.resetFilter();
        $scope.filterHistory=[];
        
        $scope.ratings=[{
        userName: 'Steve',
        rating: 5,
        comments:'Excellent!'
    },
    {
        userName: 'Anne',
        rating: 3,
        comments:'It was very meh'
    },
    {
        userName: 'Lisa',
        rating: 2,
        comments:'It was pretty bad'
    }];
}]);