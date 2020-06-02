var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, runner1, runner2, runner3, runner4;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  h1 = new Hurdles();

  
}


function draw(){
background("brown")
  h1.display();

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
  
  if(gameState === 2){
    game.end();
  }
}
