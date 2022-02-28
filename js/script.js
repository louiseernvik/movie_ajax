const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');

// load movies from API
async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=f064cd5a`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    if(data.Response == "True") displayMovieList(data.Search);
}