//API Key
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var Search = "";
var Start = 0;
var End = 0;
var numofResults = 0;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

var articleCounter = 0;

function runQuery(numofResults, queryURL) {

$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(NYTData) {

}