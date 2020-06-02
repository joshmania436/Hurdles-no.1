class Hurdles{
    constructor(){

    }


   display() {
    if(World.frameCount % 60 === 0) {
      var obstacle = createSprite(400,365,10,40);
      obstacle.velocityY = - (6 + 3*count/100);
    }
  } 
} 
    