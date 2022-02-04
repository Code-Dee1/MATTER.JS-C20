
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,ground;

function setup()
{
  createCanvas(400,400);

  engine=Engine.create();

  world=engine.world
  var ground_options={ 
    isStatic:true
  }
  ground=Bodies.rectangle(200,370,400,20,ground_options);
  World.add(world,ground);
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,10,30,ball_options)
  World.add(world,ball)
}

function draw() 
{
  background(51);
 
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30);
}

