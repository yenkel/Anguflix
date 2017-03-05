app.controller('myCollectionCtrl', function($scope, moviesService) {
    window.b = $scope;

    $scope.movies = moviesService.myCollection;

    $scope.trashClicked = false;

    $scope.$watch(moviesService.getBudget, function(newB, oldB) {
        $scope.budget = newB;
    })
    $scope.$watch(moviesService.isOutOfBudget, function(newB, oldB) {
        $scope.outOfBudget = newB;
    })

    $scope.showRemoveOption = function() {
        $scope.trashClicked = !$scope.trashClicked;
    }

    $scope.removeFromMyCollection = function(movie) {
        moviesService.removeFromMyCollection(movie);
    }

});
