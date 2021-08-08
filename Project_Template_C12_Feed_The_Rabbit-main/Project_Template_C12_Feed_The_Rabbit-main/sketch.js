var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleGroup, appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = new Group();
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();

  drawSprites();
}

function spawnApples() {

  if (frameCount % 80 === 0)
  {
    apple = createSprite(random(50, 350),40, 10, 10);
    apple.addImage(appleImage);
    apple.velocityY=-4;
    apple.lifetime=200;

    var select_sprites = Math.round(random(1,2));

    if (frameCount % 80 == 0) {
      if (select_sprites == 1 ) {

        cloudsGroup.add(cloud);
    ;
      }
    }

  }
}