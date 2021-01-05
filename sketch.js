
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var car;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
	car = new Box(700,240,70,70);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  car.display
  drawSprites();
 
}
display


