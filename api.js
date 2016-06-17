var prompt = require('prompt');
var open = require('open');

// 1. Welcome the user to our application
console.log("Welcome to the Movie Info Finder!");
// 2. Prompt the user to select a movie
prompt.start();
prompt.get(['movieName'], function (err, result) {
  console.log('You picked ' + result.movieName + '!');
})
// 3. Make a GET request to the OMDb API for the movie information

// 4. More specifically return movie name, release date and plot.

// 5. Prompt the user if this is the movie they were looking for

// 6. If yes open movie poster in the browser

// 7. If no, prompt them for new movie.
