
var snow ;
var snowImg;
var backGround,backGroundImg;

function preload(){
  backGroundImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  
backGround = createSprite(100,100,800,400);
backGround.addImage(backGroundImg);

snow = createSprite(200,40,50,50);
snow.addImage(snowImg);
snow.scale = 0.2;


}

function draw() {
  background(255,255,255);

  drawSprites();
}