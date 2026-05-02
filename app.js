// tic tac toe game

var squares = document.getElementsByTagName("td");
var xClicks = [];
var oClicks = [];
var counter = 0;
var gameOver = false;

var winCombos = [
    [0,1,2], [3,4,5], [6,7,8],  // rows
    [0,3,6], [1,4,7], [2,5,8],  // columns
    [0,4,8], [2,4,6]             // diagonals
];

function checkWin(clicks) {
    return winCombos.some(function(combo) {
        return combo.every(function(i) { return clicks.indexOf(i) !== -1; });
    });
}

function setStatus(msg) {
    document.getElementById("status").textContent = msg;
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        if (gameOver || this.getAttribute("class") !== "blank") return;

        var id = parseInt(this.id.replace("box", ""));

        if (counter % 2 === 0) {
            this.innerHTML = "X";
            this.setAttribute("class", "filled");
            xClicks.push(id);
            if (checkWin(xClicks)) {
                setStatus("X wins!");
                gameOver = true;
                return;
            }
        } else {
            this.innerHTML = "O";
            this.setAttribute("class", "filled");
            oClicks.push(id);
            if (checkWin(oClicks)) {
                setStatus("O wins!");
                gameOver = true;
                return;
            }
        }

        counter++;
        if (counter === 9) {
            setStatus("Draw!");
        }
    });
}

document.getElementById("reset").addEventListener("click", function() {
    xClicks = [];
    oClicks = [];
    counter = 0;
    gameOver = false;
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
        squares[i].setAttribute("class", "blank");
    }
    setStatus("X goes first");
});
