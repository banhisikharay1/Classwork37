/*var database;
var form, player, game;
var playerCount = 0;
var gameState=0;

function setup(){

   database = firebase.database();

   canvas = createCanvas(displayWidth - 20, displayHeight-30);

   game = new Game();
   console.log(gameState);
   game.getState();
   console.log(gameState);
   console.log(playerCount);
   game.start();

}


function draw(){
   if(playerCount === 4){
      game.updateState(1);
   }
   if(gameState === 1){
      clear();
      game.play();
   }
}*/


var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
//var distance = 0;
var database;

var form, player, game;

//var cars, car1, car2, car3, car4;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  game = new Game();
  console.log(gameState);
  game.getState();
  console.log(gameState);
  //console.log(playerCount);
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  console.log(gameState);
  if(gameState === 1){
    clear();
    game.play();
  }
}


