var database;
var gameState = 0 
var playerCount = 0 
var form, player, game, allPLayers
var car1, car2, car3, car4, cars


function setup(){



  database = firebase.database();
game = new Games()
game.getState()
game.start()

  createCanvas(displayWidth,displayHeight);
}

function draw(){

  background("white");
if(playerCount === 4){
  game.update(1)

}
console.log(playerCount,gameState)

  if(gameState === 1){
    clear()
    game.play()

  }
}


