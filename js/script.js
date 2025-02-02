let numberOfFilms = +prompt('How many films you are watchced,', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {

    const a = prompt('One of the last watched films?', ''),
        b = prompt('It is rate?', '');

    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDb.count < 10) {
    alert('You watched not many films');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
    alert('You are classic watcher');
} else if (personalMovieDb.count > 50) {
    alert('You are film MAN');
} else {
    alert('ERROR');
}

console.log(personalMovieDb);