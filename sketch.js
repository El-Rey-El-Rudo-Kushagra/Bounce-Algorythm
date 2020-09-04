var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,100); 
  fixedRect.velocityX=+2;
  fixedRect.shapeColor="green";
   movingRect=createSprite(500,200,100,50);
   movingRect.velocityX=-2; 
   movingRect.shapeColor="green";
     movingRect.debug=true; 
     fixedRect.debug=true;


}

function draw() {
  background(255,255,255);  
  drawSprites();
  //movingRect.x=World.mouseX;
   //movingRect.y=World.mouseY;
   if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
     fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
      movingRect.shapeColor="red"; 
      fixedRect.shapeColor="red"; 
      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    } 
    if( movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
      fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
        movingRect.velocityY=movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
      }
    }