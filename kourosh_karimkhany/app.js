// tic tac toe game

var squares = document.getElementsByTagName("td");
var xClicks = []   // array to keep track of x clicks
var oClicks = []   // array to keep track of o clicks
var counter = 0;   //counter to keep track of turns


// main loop to listen for clicks, check for turns and fill blank squares
for (var i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", function() {						 // add event listeners to squares
		if (counter % 2 === 0 && this.getAttribute("class") === "blank") {   // check for x click on blank square
			this.innerHTML = "X";
			this.setAttribute("class", "filled");
			counter++;
		} else if (counter % 2 !== 0 && this.getAttribute('class') === "blank") {	// check for o click on blank square
			this.innerHTML = "O";
			this.setAttribute("class", "filled");
			counter++;
		} else {

		}
		}													// if click is on a filled square, don't increase counter
		);	
}