const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, box4;
var paper1;
var ground1;

function setup() 
{
	createCanvas(1000, 700);
    
	engine = Engine.create();
	world = engine.world;
	Engine.update(engine);

	box1 = new dustbin(800, 632, 200, 20);
	
	paper1 = new paper(100, 640, 45);

	ground1 = new ground(500, 650, 1000, 15);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  paper1.x = paper1.body.position.x;
  paper1.y = paper1.body.position.y;
  paper1.body.position.x && paper1.body.position.y === paper1.body.position
  keypressed();
 
  paper1.display();
  ground1.display();
  box1.display();
  
  drawSprites();
}

function keypressed()
{
	if(keyCode === UP_ARROW)
	{
		if(paper1.x >= 500)
		{
			Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 30, y: 80});
		}
		else 
		{
			Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 20, y: -35});
		}
	}
}