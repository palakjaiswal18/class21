var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  gameObj1 = createSprite(400, 400,50,80);
  gameObj1.shapeColor = "green";

  gameObj2 = createSprite(800, 400,50,80);
  gameObj2.shapeColor = "green";

  gameObj3 = createSprite(1000,400,50,80);
  gameObj3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObj1)){   //parameters to a functions
    //returns true
    movingRect.shapeColor = "blue";
    gameObj1.shapeColor = "blue";
  }else{
    //returns false
    movingRect.shapeColor = "green";
    gameObj1.shapeColor = "green";
  }
  drawSprites();
}

