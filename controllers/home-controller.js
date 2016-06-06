angular.module('yamDBApp')
  .controller('homeCtrl', ['$http', function($http) {

  var hCtrl = this;

  console.log(JSON.parse(localStorage.getItem('movies')))

  if (JSON.parse(localStorage.getItem('movies')) != null) {
    hCtrl.movies = JSON.parse(localStorage.getItem('movies'));
  } else {
    hCtrl.movies = [
      {
        Title:"Black Hawk Down",
        Year:"2001",
        Rated:"R",
        Released:"18 Jan 2002",
        Runtime:"144 min",
        Genre:"Drama, History, War",
        Director:"Ridley Scott",
        Writer:"Mark Bowden (book), Ken Nolan (screenplay)",
        Actors:"Josh Hartnett, Ewan McGregor, Tom Sizemore, Eric Bana",
        Plot:"123 elite U.S. soldiers drop into Somalia to capture two top lieutenants of a renegade warlord and find themselves in a desperate battle with a large force of heavily-armed Somalis.",
        Language:"Somali, English",
        Country:"USA, UK",
        Awards:"Won 2 Oscars. Another 7 wins & 37 nominations.",
        Poster:"http://ia.media-imdb.com/images/M/MV5BMTQxODgzMjYyN15BMl5BanBnXkFtZTgwNDU4NTYxMTE@._V1_SX300.jpg",
        Metascore:"74",
        imdbRating:"7.7",
        imdbVotes:"287,949",
        imdbID:"tt0265086",
        Type:"movie"
      },
      {
        Title:"Lone Survivor",
        Year:"2013",
        Rated:"R",
        Released:"10 Jan 2014",
        Runtime:"121 min",
        Genre:"Action, Biography, Drama",
        Director:"Peter Berg",
        Writer:"Peter Berg, Marcus Luttrell (book), Patrick Robinson (book)",
        Actors:"Mark Wahlberg, Taylor Kitsch, Emile Hirsch, Ben Foster",
        Plot:"Marcus Luttrell and his team set out on a mission to capture or kill notorious Taliban leader Ahmad Shah, in late June 2005. Marcus and his team are left to fight for their lives in one of the most valiant efforts of modern warfare.",
        Language:"English, Pushto",
        Country:"USA",
        Awards:"Nominated for 2 Oscars. Another 5 wins & 14 nominations.",
        Poster:"http://ia.media-imdb.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_SX300.jpg",
        Metascore:"60",
        imdbRating:"7.6",
        imdbVotes:"198,465",
        imdbID:"tt1091191",
        Type:"movie"
      }
    ]
  }



  hCtrl.getData = function() {
    var title = document.getElementById('newMovieTitle').value.replace(' ', '+');
    console.log(title);
      $http({
        method:"GET",
        url:"http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json"
      }).then( function(response) {
        hCtrl.response = response;
        addMovie(hCtrl.response);
      });
  };

  function addMovie(data) {
    console.log(data);
    hCtrl.movies.push(data.data);
    saveMovies();
  }

  hCtrl.removeMovie = function(movie) {
    var movieIndex = hCtrl.movies.indexOf(movie);
    hCtrl.movies.splice(movieIndex, 1);
    saveMovies();
  }

  function saveMovies() {
    localStorage.setItem('movies', JSON.stringify(hCtrl.movies));
    console.log(JSON.parse(localStorage.getItem('movies')))
  }

}])
