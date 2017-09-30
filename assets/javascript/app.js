animals = ["Cat", "Dog", "Cheetah", "Chicken", "Donkey", "Bird", "Ant", "Cow", "Otter", "Lion", "Rhinoceros", "Snake"];

function renderButtons() {
	// $("#buttons").empty();

	for (var i = 0; i < animals.length; i++) {
		var a = $("<button>");
		a.addClass("animal btn btn-success")
		a.attr("data-name", animals[i]);
		a.text(animals[i]);
		$("#buttons").append(a);
	}
}

renderButtons();


$("#submit").on("click", function() {
	event.preventDefault();
	var animal = $(".form-control").val().trim();
	animals.push(animal);
	renderButtons();
});


$("button").on("click", function() {
	console.log("you clicked an animal");
});

