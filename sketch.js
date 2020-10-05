const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSide1,boxDownSide,boxSide2;
var engine,world;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
    world = engine.world;

	boxSide1 = new Box(300,610,20,100);
	boxDownSide = new Box(400,660,200,20);
	boxSide2 = new Box(500,610,20,100);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);	
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxSide1.display();
  boxSide2.display();
  boxDownSide.display();
  
  drawSprites();
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW)
  {
     Body.setStatic(packageBody,false);  
  }
}