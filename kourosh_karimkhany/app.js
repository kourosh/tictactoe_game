// Apply event listeners to each square
var squares = document.getElementsByTagName("td");
counter = 0;
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		if (counter % 2 === 0 && this.getAttribute("class") === "blank") {
			this.innerHTML = "X";
			this.setAttribute("class", "filled");
			counter++;
		} else if (counter % 2 !== 0 && this.getAttribute('class') === "blank") {
			this.innerHTML = "O";
			this.setAttribute("class", "filled");
			counter++;
		}
	});
}