
function preload(){
 seaimg = loadImage("sea.png");
 shipimg1 = loadAnimation("ship-4.png","ship-3.png","ship-2.png","ship-1.png");  
}

function setup(){
  createCanvas(400,400);
  
  //creating the ship
  ship = createSprite(50,160,20,50);
  ship.addAnimation = "running" , shipimg1);
  edges = createEdgeSprites();
  ship.scale = 3;
  ship.x = 50;
  sea=createSprite(200,180,400,20)
  sea.addImage("sea",seaimg);
  sea = sea.width/2;
}

function draw() {
  background("blue");
  sea.velocityX= -7;
}
//code to reset background
if(sea.x<0){
  sea.x = sea.width/2;
}


