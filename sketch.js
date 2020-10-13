
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;

 var bobObject1;
 var bobObject2;
 var bobObject3;
 var bobObject4;
 var bobObject5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600,150,375,35);

	bobObject1 = new Bob(475,400,30);
	bobObject2 = new Bob(535,400,30);
	bobObject3 = new Bob(595,400,30);
	bobObject4 = new Bob(655,400,30);
	bobObject5 = new Bob(715,400,30);

	rope1 = new Rope(bobObject1.body,roof.body)
	rope2 = new Rope(bobObject2.body,roof.body)
	rope3 = new Rope(bobObject3.body,roof.body)
	rope4 = new Rope(bobObject4.body,roof.body)
	rope5 = new Rope(bobObject5.body,roof.body)

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(255);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  
  drawSprites();
 
}



