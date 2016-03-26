var gameStarted = false;
var pattern = [];
var colors = ["blue", "yellow", "green", "pink", "white"];
var currentRow = [0,0,0,0,0];

function setupGame(){
  gameStarted = true;
  var gameSetup = document.getElementById('gameSetup');
  gameSetup.style.display = "none";



  var mainGame = document.getElementById('mainGame');
  mainGame.style.display = "block";
}

function changeColor(pin){
  var colorIndex = colors.indexOf(pin.style.backgroundColor);
  if(colorIndex + 1 < colors.length){
    colorIndex++;
  } else {
    colorIndex = 0;
  }

  pin.style.backgroundColor = colors[colorIndex];
  if(gameStarted) {
    var columnNumber = Array.prototype.indexOf.call(pin.parentNode.childNodes, pin);
    currentRow[columnNumber] = colorIndex;
  }

}

function guess(){

}
