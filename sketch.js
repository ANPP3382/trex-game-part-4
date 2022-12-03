
var trex ,trex_running;
var edges;
var ground, groundImg, invisible;
var nubeImg, nubes;
var obs1, obs2, obs3, obs4, obs5, obs6, obs1Img, obs2Img, obs3Img, obs4Img, obs5Img, obs6Img;
function preload(){  
 trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png");
groundImg=loadImage("ground2.png");
nubeImg = loadImage("cloud.png")
obs1Img = loadImage("obstacle1.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50, 70, 20, 50)
  edges = createEdgeSprites();
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
  
//Piso
ground= createSprite(180, 180, 600, 20);
ground.addImage(groundImg)
invisible=createSprite(200,190,600,10);
invisible.visible=false;
}

function draw(){
  background("orange")
  ground.velocityX=-2; 
  if(ground.x < 0){ 
    ground.x=ground.width/2; 
  }
 
  if(keyDown("space") && trex.y>=100){
    trex.velocityY = -10
}
trex.velocityY=trex.velocityY +0.8;
 trex.collide(invisible); 
 
crearNubes();
crearObstaculos();
drawSprites();

}



//Función de nubes 
function crearNubes()
{ 
  if(frameCount % 60 === 0){
    var nube = createSprite(600,100,30,10); 
    nube.addImage(nubeImg)
    nube.scale = 0.5
    nube.y=Math.round(random(10, 100));
    nube.velocityX = -3
    nube.depth = trex.depth;
    trex.depth = trex.depth+3;
  }
   
}


//Función de obstaculos
function crearObstaculos()
{
  if(frameCount % 60 === 0){
 var obs1 = createSprite(600, 150, 30, 10)
  obs1.addImage(obs1Img)
  obs1.scale = 0.5
  obs1.velocityX = -3
}
  
}




