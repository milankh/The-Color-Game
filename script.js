var numOfSqares = 9;
var colors = generateRandomColors(numOfSqares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numOfSqares = 3;
  colors = generateRandomColors(numOfSqares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

})

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numOfSqares = 9;
  colors = generateRandomColors(numOfSqares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
})

resetButton.addEventListener("click", function() {
  //generate all random colors
  colors = generateRandomColors(numOfSqares);
  //pick a random number from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = "new colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
});

for (var i = 0; i < colors.length; i++) {
  //add initial colors
  squares[i].style.background = colors[i];
  //add click listener for squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323"
      messageDisplay.textContent = "Try Again";

    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = []

  //repeat it num times
  for (var i = 0; i < num; i++) {
    //get random color and push in to array
    arr.push(randomColors());
  }

  //return the array
  return arr;
}


function randomColors() {
  //create random color for Red 0-255
  var r = Math.floor(Math.random() * 256);
  //create random color for green 0-255
  var g = Math.floor(Math.random() * 256);
  //create random for blue 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
