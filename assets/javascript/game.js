
var wins = 1;
var losses = 1;
var counter= 0;
//var randNumber;
console.log(targetNumber);

var winElement = document.getElementById("wins");
var loseElement = document.getElementById("losses");
var scoreElement = document.getElementById("playerScore");



function reset() {
	randomNumber();
	counter = 0;
	targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
console.log(targetNumber);
$('#targetNumber').text(targetNumber);

}


var numberOptions = [10, 5, 3, 7];
var randomNumber = function () {
var item = numberOptions[Math.floor(Math.random()* numberOptions.length)];
return item;
};


  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("#image");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[Math.floor(Math.random()* numberOptions.length)]);
        $("#crystals").append(imageCrystal);
 
  }
  randomNumber();
 
  $(".crystal-image").on("click", function() {
   
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    scoreElement.innerHTML = counter;
    

    if (counter === targetNumber) {
    	winElement.innerHTML = wins++;	
      reset();
      randomNumber();
      alert("You win!");

    }
    else if (counter >= targetNumber) {
    	loseElement.innerHTML = losses++;
      reset();
      randomNumber();
      alert("You lose!!");

    }
  });

  reset();
  randomNumber();