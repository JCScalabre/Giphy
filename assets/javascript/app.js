// Our initial array of animals:
var animals = ["Cat", "Dog", "Cheetah", "Chicken", "Donkey", "Bird", "Ant", "Cow", "Otter", "Lion", "Rhinoceros", "Snake"];

// Our function to render buttons of the animals array:
function renderButtons() {
	$("#buttons").empty();

	for (var i = 0; i < animals.length; i++) {
		var a = $("<button>");
		a.addClass("animal btn btn-success")
		a.attr("data-name", animals[i]);
		a.text(animals[i]);
		$("#buttons").append(a);
	}
}

// Our function that adds whatever the user submits into the array:
$("#submit").on("click", function() {
	event.preventDefault();
	var animal = $(".form-control").val().trim();
	animals.push(animal);
	renderButtons();
});

// Function that displays gifs:
function displaygif() {
	$("#gifs").empty();
	var animalName = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";	
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
			var animalDiv = $("<span>");
			var animalImage = $("<img>");
			// console.log(results[i].rating);
			animalImage.attr("src", results[i].images.fixed_height_still.url);
			animalImage.attr("data-still", results[i].images.fixed_height_still.url);
			animalImage.attr("data-animate", results[i].images.fixed_height.url);
			animalImage.attr("data-state", "still");
			animalDiv.append(animalImage);
			$("#gifs").append(animalDiv);
		}
	});
}

// Function for when the user clicks an image:
function imageclick() {
	var state = $(this).attr("data-state");
	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	} else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");

	}
}

// When the user clicks the submit button:
$(document).on("click", ".animal", displaygif);

// When the user clicks an image:
$(document).on("click", "img", imageclick);

// Startup code:
renderButtons();
