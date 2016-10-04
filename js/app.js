//$(function(){});

$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $("search-term").val();
		getRequest(searchTerm);
		});
	});

$( function() {
	$( "#dialog" ).dialog();
});

function getRequest(searchTerm){
  var params = {
  	part: 'snippet',
    key: 'AIzaSyA9usdjGjqrhkqJ7Y5fgMrK_BD6Ar9gpTQ',
    q: searchTerm
  };

  url = 'https://www.googleapis.com/youtube/v3/search';
  console.log("getRequest submitted");

  $.getJSON(url, params, function(data){
  	console.log(data);
    showResults(data.items);
  });
}

function showResults(results){
	var html = "";
	var phtml = "";
	$.each(results, function(index, value){
		console.log(value);
		//phtml += "<div><img src='" + value.snippet..thumbnails.medium.url + "'></div>";
		html += "<p><a href='http://www.youtube.com/watch?v=" + value.id.videoId + "'>" + value.snippet.title + "<p>";
	});
	$('#search-results').html(html);
}
