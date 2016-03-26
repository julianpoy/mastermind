var gameStarted = false;

function setupGame(){
  gameStarted = true;
  var gameSetup = document.getElementById('gameSetup');
  gameSetup.style.display = "none";

  var mainGame = document.getElementById('mainGame');
  mainGame.style.display = "block";
}

function changeColor(pinid){
  var pin = document.getElementById(pinid);
  pin.style.backgroundColor = "blue";
}
