const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var backgroundImage;

function preload(){
//heroImage=loadImage("Superhero-01.png");
backgroundImage=loadImage("GamingBackground.png");
}




function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
ground=new Ground(330,390);
block1=new Block(370,350);
block2=new Block(370,340);
block3=new Block(370,330);
block4=new Block(370,320);
block5=new Block(370,310);
block6=new Block(370,300);
block7=new Block(370,290);
block8=new Block(370,280);
block9=new Block(400,350);
block10=new Block(400,340);
block11=new Block(400,340);
block12=new Block(400,330);
block13=new Block(400,320);
block14=new Block(400,310);
block15=new Block(400,300);
block16=new Block(430,350);
block17=new Block(430,340);
block18=new Block(430,330);
block19=new Block(430,320);
block20=new Block(430,310);
block21=new Block(430,300);
block22=new Block(430,290);
block23=new Block(430,280);
block24=new Block(430,270);



ball=new Ball(170,190);
monster=new Ball(570,190);
slingshot=new Slingshot(ball.body,{x:270,y:220});


 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImage); 
  Engine.update(engine); 

ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
ball.display();
slingshot.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();



  //drawSprites();
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});



}