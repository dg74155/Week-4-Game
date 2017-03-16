var value = (Math.floor(Math.random() * 101 - 0) + 19);


$("#display").html(value);

var numbero = 0
var numbert = 0
var numberth = 0
var numberfou = 0
var total = 0

$("#gemone").click(function() {
	 numbero = (Math.floor(Math.random() * 11 - 0) + 1);
	$("#culm").html(numbero);
});

$("#gemtwo").click(function()	{
	 numbert = (Math.floor(Math.random() * 11 - 0) + 1);
	$("#culm").html(numbert);
});

$("#gemthr").click(function()	{
	 numberth = (Math.floor(Math.random() * 11 - 0) + 1);
	$("#culm").html(numberth);
});

$("#gemfou").click(function()	{
	 numberfou = (Math.floor(Math.random() * 11 - 0) + 1);
	$("#culm").html(numberfou);
});

$("#gemone").click(function()	{
	total = (numbero + numbert);
	$("#culm").html(total);
});



if (numbero === value) {
	$("#win").html("Wins" + 1);
	value = (Math.floor(Math.random() * 101 - 0) + 19);
}
else if (numbero > value)	{
	$("#loss").html("Losses" + 1);
	value = (Math.floor(Math.random() * 101 - 0) + 19);
};

//I could not get the remaining of the assigment to function, but here is my pseudocode:
//If buttons are pressed after another, they need to constantly add to the total value until it either matches or excceds target number.
//I also couldn't get the wins and losses to increase once a condition had been met.
//After a win or loss occurs, values need to reset.
