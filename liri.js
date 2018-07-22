require("dotenv").config();

// Node imports to run the functions
var keys = require("./keys.js");
var fs = require("fs"); //reads and writes files
var request = require("request");
var twitter = require("twitter");
var Spotify = require ("node-spotify-api");
var spotify = new Spotify(keys.spotify)
var liriArgument = process.argv[2];
var nodeArgs = process.argv[3];


// Switch between possible commands
switch(liriArgument) {
    case "my-tweets": myTweets(); break;
    case "spotify-this-song": spotifyThisSong(); break;
    case "movie-this": movieThis(); break;
    case "do-what-it-says": doWhatItSays(); break;
    // Instructions displayed in terminal to the user
    default: console.log("\r\n" +"Try typing one of the following commands after 'node liri.js' : " +"\r\n"+
        "1. my-tweets 'any twitter name' " +"\r\n"+
        "2. spotify-this-song 'any song name' "+"\r\n"+
        "3. movie-this 'any movie name' "+"\r\n"+
        "4. do-what-it-says."+"\r\n"+
        "Be sure to put the movie or song name in quotation marks if it's more than one word.");
};

// Twitter function
function myTweets() {
    var client = new twitter(keys.twitter);
    var twitterUsername = process.argv[3];
    if(!twitterUsername){
        twitterUsername = "@Valdine72858626";
    }
    params = {screen_name: twitterUsername};
    client.get("statuses/user_timeline/", params, function(error, data, response){
        if (!error) {
            for(var i = 0; i < data.length; i++) {
                //console.log(response); // Show the full response in the terminal
                var twitterResults = 
                "@" + data[i].user.screen_name + ": " + 
                data[i].text + "\r\n" + 
                data[i].created_at + "\r\n" + 
                "------------------------------ " + i + " ------------------------------" + "\r\n";
                console.log(twitterResults);
                log(twitterResults); // calling log function
            }
        }  else {
            console.log("Error :"+ error);
            return;
        }
    });
}



  function spotifyThisSong() {
    var songName = process.argv[3];
    if(!songName){
        songName = "I want it that way";
    }
    params = songName;
    spotify.search({ type: "track", query: params }, function(err, data) {
        if(!err){
            var songInfo = data.tracks.items;
            for (var i = 0; i < 5; i++) {
                if (songInfo[i] != undefined) {
                    var spotifyResults =
                    "Artist: " + songInfo[i].artists[0].name + "\r\n" +
                    "Song: " + songInfo[i].name + "\r\n" +
                    "Album the song is from: " + songInfo[i].album.name + "\r\n" +
                    "Preview Url: " + songInfo[i].preview_url + "\r\n" + 
                    "------------------------------ " + i + " ------------------------------" + "\r\n";
                    console.log(spotifyResults);
                    log(spotifyResults); // calling log function
                }
            }
        }	else {
            console.log("Error :"+ err);
            return;
        }
    });
};


	// Movie function, call OMDB API using request 
function movieThis(){
 		var movie = process.argv[3];
 		if(!movie){
 			movie = "mr. nobody";
		} 
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        request(queryURL, function(error, response, body) {
    
            var data = JSON.parse(body);
            console.log("\n============================================\n");
        console.log("\nTitle: " + data.Title);
        console.log("\nRelease date: " + data.Released);
        console.log("\nIMDB rating: " + data.Ratings[0].Value);
        console.log("\nRotten Tomatoes rating: " + data.Ratings[1].Value);
        console.log("\nCountry: " + data.Country);
        console.log("\nLanguage: " + data.Language);
        console.log("\nPlot summary: " + data.Plot);
        console.log("\nStarring: " + data.Actors);
        console.log("\n============================================\n");
    });
}

// Do what it says
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data){
        if (!error) {
            doWhatItSaysResults = data.split(",");
            spotifyThisSong(doWhatItSaysResults[0], doWhatItSaysResults[1]);
        } else {
            console.log("Error occurred" + error);
        }
    });
}
    // log
	function log(logResults) {
        fs.appendFile("random.txt", logResults, (error) => {
          if(error) {
            throw error;
          }
        });
      }
  