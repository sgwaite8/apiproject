var prompt = require('prompt');
var open = require('open');
var bodyObject;
function searchMovie(){
  console.log("Type a movie title!")
  prompt.start();
  prompt.get(['movieName'], function (err, result) {
    var request = require('request');
    request('http://www.omdbapi.com/?t='+ encodeURIComponent(result.movieName) + '&y=&plot=short&r=json', function (error, response, body){
      if (!error && response.statusCode == 200) {
        bodyObject = JSON.parse(body);
        var synopsisArray = [bodyObject.Title, bodyObject.Released, bodyObject.Plot];
        console.log(synopsisArray);
        confirmSelection();
      }
    })
  })
}

function confirmSelection(response, callBack){
  console.log("Is this the movie you were looking for?  Y/N")
  prompt.start();
  prompt.get(['response'], function (err, result) {
    if ( result.response === 'Y'){
      var urlThing = bodyObject.Poster;
      console.log("Have a nice day!");
      open(urlThing);
    }
    else if(result.response === 'N'){
      console.log("Sorry about that. Let's try again!")
      callBack = searchMovie();
    }
  })
}

console.log("Welcome to the Movie Info Finder!");
searchMovie();











// 1. Welcome the user to our application

// 2. Prompt the user to select a movie

// 4. More specifically return movie name, release date and plot.

// 5. Prompt the user if this is the movie they were looking for

// 6. If yes open movie poster in the browser

// 7. If no, prompt them for new movie.
