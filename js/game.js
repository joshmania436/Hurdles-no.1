class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
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
  
      runner1 = createSprite(100,200);
      runner2 = createSprite(300,200);
      runner3 = createSprite(500,200);
      runner4 = createSprite(700,200);
      runners = [runner1, runner2, runner3, runner4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){

        var index = 0;

        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          index = index + 1 ;
  
          x = x + 200;

          y = displayHeight - allPlayers[plr].distance;

          runners[index-1].x = x;
          runners[index-1].y = y;

         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);

            runners[index - 1].shapeColor = "red";
            
            camera.position.x = displayWidth/2;
            camera.position.y = runners[index-1].y;
          }
       
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance > 3860){
        gameState = 2;
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  