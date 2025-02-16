let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films you are watchced,', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films you are watchced,', '');

    }

}

//start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const a = prompt('One of the last watched films?', ''),
            b = prompt('It is rate?', '');

        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
        } else {
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        alert('You watched not many films');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
        alert('You are classic watcher');
    } else if (personalMovieDb.count > 50) {
        alert('You are film MAN');
    } else {
        alert('ERROR');
    }

}

//detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

//showMyDb(personalMovieDb.privat);

function writeYourGenres(res) {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your most like genre number ${i}: `);
        personalMovieDb.genres[i - 1] = genre;
    }
}

writeYourGenres();

console.log(personalMovieDb);