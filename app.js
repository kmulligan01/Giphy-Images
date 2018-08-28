var gifArray = ["Comedy", "Iron Man", "Reading", "Puppies"];


function displayGifInfo() {
  
  //var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifArray + "&apikey=4cK7PhqwwNF15DHlSkE0A2ttuyHL6uoX&limit=10";
 
  $.ajax({
    url: "https://api.giphy.com",
    method: "GET/v1/gifs/search",
    q: gifArray[0],
    limit: 10,
    api_key: '4cK7PhqwwNF15DHlSkE0A2ttuyHL6uoX',
    success: (function(data) {
   
   var newGifDiv = $("<div class ='gifs'>");

   var rating = data.rating;

   var pOne = $("<p>").text("Rating: " + rating);

   newGifDiv.append(pOne);

   var newImage = data.images;

   var image = $("<img>").attr("src", newImage);

   newGifDiv.append(image);

   $("#gifs-view").append(newGifDiv);
  })
  });
  };

  function renderButtons() {

  
 $("#gif-view").empty();

  for (var i = 0; i < gifArray.length; i++) {

    var a = $("<button>");
    
    a.addClass("gifs");
    
    a.attr("data-name", gifArray[i]);
    
    a.text(gifArray[i]);
    
    $("#gif-view").prepend(a);
  }
}

$("#add-gif").on("click", function(event) {
  event.preventDefault();

  var newGif = $("#gif-input").val().trim();

  gifArray.push(newGif);

 
  renderButtons();
});


$(document).on("click", ".gifs", displayGifInfo);

renderButtons();
