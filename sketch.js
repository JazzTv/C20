
var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(500, 200, 50, 50);
  rect1 = createSprite(100,100,50,50);
  rect1.velocityY = 5;
  rect2 = createSprite(100,400,50,50);
  rect2.velocityY = -3;
}

function draw() {
  background(255,255,255);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("Distance = " + (movingRect.x - fixedRect.x) );
  console.log("Width/2 = " + (movingRect.width/2 + fixedRect.width/2) );

  if((movingRect.x - fixedRect.x) <= (movingRect.width/2 + fixedRect.width/2)
    && fixedRect.x - movingRect.x <= (fixedRect.width/2 + movingRect.width/2) 
    && movingRect.y - fixedRect.y <= (movingRect.height/2 + fixedRect.height/2) 
    && fixedRect.y - movingRect.y <= (movingRect.height/2 + fixedRect.height/2))
    
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } 

  if ((rect1.y - rect2.y <= rect1.height/2 + rect2.height/2)
  && (rect2.y - rect1.y <= rect1.height/2 + rect2.height/2))
  {
     rect1.velocityY = -1*rect1.velocityY;
     rect2.velocityY = -1*rect2.velocityY;
  }
    drawSprites();
}
