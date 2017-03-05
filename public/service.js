app.service("moviesService", function() {

    var allMovies = [{
        name: "Inception",
        synopsis: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        date: 2010,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        price: 3
    }, {
        name: "The Revenant",
        synopsis: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
        date: 2016,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BY2FmODc2N2QtYmY3MS00YTMwLWI2NGYtZWRmYWVkNjFjZmI0XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg",
        price: 3
    }, {
        name: "Shutter Island",
        synopsis: "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
        date: 2010,
        image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        price: 6
    }];

    var myCollection = [];

    var budget = 6;
    var outOfBudget = false;

    var indexInMyCollection = function(movieToCheck) {
        for (m in myCollection) {
            var movie = myCollection[m];
            if (movieToCheck.name == movie.name) {
                return m;
            }
        }
        return -1;
    }

    var addToMyCollection = function(movie) {
        var index = indexInMyCollection(movie);
        if (index < 0) {
            if (budget > 0) {
                myCollection.push(movie);
                budget -= movie.price;
            } else {
                outOfBudget = true;
            }
        }
    }
    var getBudget = function() {
        return budget;
    }
    var isOutOfBudget = function() {
        return outOfBudget;
    }
    var removeFromMyCollection = function(movieToRemove) {
        myCollection.splice(indexInMyCollection(movieToRemove), 1);
    }
    var addToBudget = function() {
        budget += 3;
    }

    return {
        indexInMyCollection: indexInMyCollection,
        getBudget: getBudget,
        isOutOfBudget: isOutOfBudget,
        allMovies: allMovies,
        myCollection: myCollection,
        addToMyCollection: addToMyCollection,
        removeFromMyCollection: removeFromMyCollection,
        addToBudget: addToBudget
    };

});
