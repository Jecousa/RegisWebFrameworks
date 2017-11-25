
//Boiler Plate Code
describe('viewRatings', function(){
    beforeEach(module('ratingApp'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    //Tests
    
    //Username
    describe ('Rating Controller', function(){
        it('sets rating to user Steve', function(){
            var $scope = {};
            var controller = $controller('viewRatings', {$scope:$scope });
            expect($scope.ratings.userName).toEqual('Steve');
        });
        
        //Rating
         it('sets rating to rating of 5', function(){
            var $scope = {};
            var controller = $controller('viewRatings', {$scope:$scope });
            expect($scope.ratings.rating).toEqual(5);
        });
        
        //Comment
         it('sets rating to comments "\Excellent!\"', function(){
            var $scope = {};
            var controller = $controller('viewRatings', {$scope:$scope });
            expect($scope.ratings.comments).toEqual('Excellent!');
        });
    });
});


