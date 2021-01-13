//Namespacing

const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var object,ground;
function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var options = {

        restitution : 2
    }

    object = Bodies.rectangle(200,100,50,50,options);
    World.add(world,object);

    var ground_options = {

        isStatic : true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    console.log(object);
}

function draw(){
    background(0);

    //Always Update the Engine to apply the new changes
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50.50);
    rect(ground.position.x,ground.position.y,400,20);
   
}

