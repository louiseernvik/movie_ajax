const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');

// load movies from API
async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=f064cd5a`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    if(data.Response == "True") displayMovieList(data.Search);
}

function findMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMovieList(movies){
    searchList.innerHTML = "";
    for(let index = 0; index < movies.length; index++){
        let movieListItem = document.createElement('div');
        movieListItem.classList.add('search-list-item');
        if(movies[index].Poster != "N/A")
            moviePoster = movies[index].Poster;
        else 
            moviePoster = "image_not_found.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[index].Title}</h3>
            <p>${movies[index].Year}</p>
        </div>`;
        searchList.appendChild(movieListItem);
    }
}