var prompt = require('prompt');
var open = require('open');

// 1. Welcome the user to our application
console.log("Welcome to the Movie Info Finder!");
// 2. Prompt the user to select a movie
prompt.start();
prompt.get(['movieName'], function (err, result) {
  console.log('You picked ' + result.movieName + '!');
// 3. Make a GET request to the OMDb API for the movie information
  var request = require('request');
  request('http://www.omdbapi.com/?t='+ encodeURIComponent(result.movieName) + '&y=&plot=short&r=json', function (error, response, body){
    if (!error && response.statusCode == 200) {
      var bodyObject = JSON.parse(body);
      // console.log(bodyObject);
      var synopsisArray = [bodyObject.Title, bodyObject.Released, bodyObject.Plot];

      console.log(synopsisArray);
      console.log("Is this the movie you were looking for?")
    prompt.start();
    prompt.get(['response'], function (err, result) {
      if (result.response === 'Y') {
        var urlThing = bodyObject.Poster;
      console.log(urlThing);
      open(urlThing);
      }
      else if(result.response === 'N'){
        console.log("search again")
      }
    })
    }
  })
})

// 4. More specifically return movie name, release date and plot.

// 5. Prompt the user if this is the movie they were looking for

// 6. If yes open movie poster in the browser

// 7. If no, prompt them for new movie.
