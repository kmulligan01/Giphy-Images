var gifArray = ["Comedy", "Iron Man", "Reading", "Puppies"];


function displayGifInfo() {

  var gifs = $(this).attr("pic-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifArray + "&apikey=4cK7PhqwwNF15DHlSkE0A2ttuyHL6uoX&limit=10";
 
  $.ajax({
    url: queryURL,
    method: "GET",

  }).then(function(data) {
   
   var newGifDiv = $("<div class ='gifs'>");

   var rating = data.rating;

   var pOne = $("<p>").text("Rating: " + rating);

   newGifDiv.append(pOne);

   var newImage = data.images;

   var image = $("<img>").attr("src", newImage);

   newGifDiv.append(image);

   $("#gifs-view").append(newGifDiv);
  });

}

function renderButtons() {

  
 $("#gif-view").empty();

  for (var i = 0; i < gifArray.length; i++) {

    // Then dynamicaly generates buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adds a class of movie to our button
    a.addClass("gifs");
    // Added a data-attribute
    a.attr("data-name", gifArray[i]);
    // Provided the initial button text
    a.text(gifArray[i]);
    // Added the button to the buttons-view div
    $("#gif-view").prepend(a);
  }
}

// This function handles events where the add movie button is clicked
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  var newGif = $("#gif-input").val().trim();

  // The movie from the textbox is then added to our array
  gifArray.push(newGif);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".gifs", displayGifInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
