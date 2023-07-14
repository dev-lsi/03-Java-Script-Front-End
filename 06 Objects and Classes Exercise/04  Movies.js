const moviesList = [];

function createMovie(currMovieRow) {

    const isAddMovie = currMovieRow.includes('addMovie');
    const isDirectedBy = currMovieRow.includes('directedBy');
    const isOnDate = currMovieRow.includes('onDate');
    const newMovie = {};

    if (isAddMovie) {
        const splitedRow = currMovieRow.split(' ');
        const movieName = splitedRow.slice(1, splitedRow.length).join(" ");
        newMovie.name = movieName;
    };

    if (isDirectedBy) {
        const [movieName, director] = currMovieRow.split(' directedBy ');
        newMovie.name = movieName;
        newMovie.director = director;
    }

    if (isOnDate) {
        const [movieName, date] = currMovieRow.split(' onDate ');
        newMovie.name = movieName;
        newMovie.date = date;
    }

    return newMovie;

};

function chekIfMovieExist(movie) {

    let isExist = false;

    for (let i = 0; i < moviesList.length; i++) {

        const currMovie = moviesList[i];
        if (movie.name === currMovie.name) {
            isExist = true;
        }

    }

    return isExist;

}

function mergeMoviesData(newMovie){
    
    for (let i = 0; i < moviesList.length; i++) {

        const currElement = moviesList[i];

        if(currElement.name === newMovie.name){
            const keysArr = Object.keys(newMovie);
            keysArr.forEach(key => {
                currElement[key] = newMovie[key];
            });
        }
    }

   
}

function solve(input) {

    const inputArr = [...input];
    inputArr.forEach(element => {

        const newMovie = createMovie(element);
        const isMovieExisting = chekIfMovieExist(newMovie);

        if (isMovieExisting === false) {

            moviesList.push(newMovie);
            
        }

        if (isMovieExisting === true) {
            
            mergeMoviesData(newMovie);
        }

    });

    moviesList.forEach(movie=>{
        if(movie.hasOwnProperty('name')&&movie.hasOwnProperty('director')&&movie.hasOwnProperty('date')){
            console.log(`${movie.name} by ${movie.director} on date ${movie.date}`);
        }

        
    })
};

//solve(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);

solve([ 'addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo' ]);



