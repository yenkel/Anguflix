app.controller("allMoviesCtrl", function($scope, moviesService) {
    window.a = $scope;
    $scope.movies = moviesService.allMovies;

    $scope.addToMyCollection = function(movie) {
        moviesService.addToMyCollection(movie);
    };
});
