var prompt = require('prompt');
var open = require('open');
var bodyObject;

function repeatSearch(){
  searchMovie();
}
function repeatConfirm(){
  confirmSelection(currentMovie);
}

function searchMovie(){
  console.log("Type a movie title!")
  prompt.start();
  prompt.get(['movieName'], function (err, result) {
    var request = require('request');
    request('http://www.omdbapi.com/?t='+ encodeURIComponent(result.movieName) + '&y=&plot=short&r=json', function (error, response, body){
      if (!error && response.statusCode == 200) {
        bodyObject = JSON.parse(body);
        var synopsisArray = [bodyObject.Title, bodyObject.Released, bodyObject.Plot];
        if (synopsisArray[0] === undefined){
          console.log("Sorry, no results for that title.")
          repeatSearch();
        }
        else {
          console.log(synopsisArray);
          confirmSelection();
        }
      }
    })
  })
}

function confirmSelection(response, callBack){
  console.log("Is this the movie you were looking for?  Y/N")
  prompt.start();
  prompt.get(['response'], function (err, result) {
    //result.response.toUpperCase();
    if ( result.response === 'Y'){
      var urlThing = bodyObject.Poster;
      console.log("Have a nice day!");
      open(urlThing);
    }
    else if(result.response === 'N'){
      console.log("Sorry about that. Let's try again!")
      callBack = searchMovie();
    }
    else {
      console.log("Sorry, I didn't understand that.")
      repeatConfirm();
    }
  })
}

console.log("Welcome to the Movie Info Finder!");
var currentMovie = searchMovie();






