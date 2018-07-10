require("dotenv").config();
var keys = require('keys.js')
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require("request");
var fs = require("fs");
var myTweets = process.argv[2];
var spotifyThisSong = process.argv[2];
var song = process.argv[3];
var movieThis = process.argv[2];
var movie = process.argv[3];
var doWhatItSays = process.argv[2];
request("https://api.twitter.com/1.1/users/search.json?q=tweets", function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body).tweets);
    }
});

request("https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10", function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body).artist);
    }
});

request("http://www.omdbapi.com/?t= movie &y=&plot=short&apikey=trilogy", function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
});