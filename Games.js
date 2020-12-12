class Games{ 
    constructor(){

    }
    getState(){
        var gameState1 = database.ref("gameState")
        gameState1.on("value", function(data){
            gameState = data.val()
            
        })
    }

    update(state){ 
    database.ref("/").update({
        gameState:state
    })
    }


    
   
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
      car1 = createSprite(200, 200)
  car2 = createSprite(400,200)
  car3 = createSprite(600,200)
  car4 = createSprite(800,200)
cars = [car1,car2, car3, car4]
      }
    
      play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100)
        drawSprites()
        Player.getPlayerInfo();
    console.log(allPLayers)
        if(allPLayers !== undefined){
          var indexer = 0
          var x = 0
          var y = 0
          for(var plr in allPLayers){
           indexer = indexer+1

           x = x+100
           y = displayHeight-allPLayers[plr].distance
           cars[index-1].x = x
           cars[index-1].y = y
           if(indexer === player.index){
             cars[index-1].shapeColor = "red"
           }
          }
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=50
          player.nameUp();
        }
      }

}