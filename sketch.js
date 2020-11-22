const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,body,box1,box2,ground;
function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;

 
  box1=new Box(200,300,50,50);
box2=new Box(240,100,50,70);
 ground=new Ground(400,height,800,20);


}

function draw() {
  Engine.update(engine);
  background(0); 
 

  box1.display();
  box2.display();
  ground.display();
  
}