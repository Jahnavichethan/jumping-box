var block1,block2,block3,block4
var block8,block9,block10
var jumpingbox;
var music;

function preload(){
music = loadSound("music.mp3");
}


function setup(){
  createCanvas(600,600);
  // create surface 
  block1=createSprite(60,570,150,20);
  block1.shapeColor="violet";
  block2=createSprite(210,570,150,20);
  block2.shapeColor="yellow";
  block3=createSprite(360,570,150,20);
  block3.shapeColor="orange";
  block4=createSprite(510,570,150,20);
  block4.shapeColor="lightgreen";

  block8=createSprite(570,500,10,10);
  block8.shapecolor="black";
  block8.visible=false;
  block9=createSprite(500,30,10,10);
  block9.shapecolor="black";
  block9.visible=false;
  block10=createSprite(30,500,10,10);
  block10.shapecolor="black";
  block10.visible=false;
  
  

  //create jumoing box sprite and give velocity 
  jumpingbox=createSprite(50,50,30,30);
  jumpingbox.shapeColor="white"
  jumpingbox.velocityX=2
  jumpingbox.velocityY=5
  

}

function draw() {
  background("darkgrey");

  istouching4()
  istouching3()
  istouching2()
  istouching()
  
  
  bounce2(block8,jumpingbox);
  bounce3(block9,jumpingbox);
  bounce4(block10,jumpingbox);

  
  
  
  
  drawSprites();
}
