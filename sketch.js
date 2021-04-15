const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() 
{
  bg = loadImage("snow1.jpg");
}

function setup()
{
  var canvas = createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
}

function draw()
{
if(backgroundImg)
background(bg);

  drawSprites();
}