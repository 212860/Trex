
var trex ,trex_running;
var edges;
var ground;
var groundImage;
function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 edges = createEdgeSprites();
 trex.scale = 0.5;
 ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
}

function draw(){
  background("white");
  ground.velocityX = -2;
if(ground.x<0){
  ground.x = ground.width/2;
}
  if(keyDown("space")){
trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY+0.5;
  trex.collide (ground);
  drawSprites();

}
