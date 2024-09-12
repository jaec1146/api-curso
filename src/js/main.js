async function getTrendingMoviesPreview(key) {
 let res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + key);
 let data = await res.json();

 let movies = data.results;
 movies.forEach(movie => {
  let trendingPreviewMoviesContainer = document.querySelector('#trendingPreview-MovieList');

  let movieContainer = document.createElement('div'); 
  movieContainer.classList.add('movie-container');

  let movieImg = document.createElement('img');
  movieImg.classList.add('movie-image');
  movieImg.setAttribute('alt', movie.title);
  movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
  
  movieContainer.appendChild(movieImg);
  trendingPreviewMoviesContainer.appendChild(movieContainer);
 });
}


getTrendingMoviesPreview(API_KEY)


async function slider(key) {
 let res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + key)
 let data = await res.json()

 let movies = data.results;
 let slider = document.querySelector('#slider')
 movies.forEach(movie => {
  
  let containerMovie = document.createElement('div')
  containerMovie.classList.add("swiper-slide")
  
  let imgMovie = document.createElement('img')
  imgMovie.setAttribute('alt', movie.title)
  imgMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path)
    
  containerMovie.appendChild(imgMovie)
  slider.appendChild(containerMovie)
 })
}

slider(API_KEY)