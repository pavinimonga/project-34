const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, monster1,monster3;
var backgroundImg,platform;
var hero, slingshot;
var bgImage;
var gameState = "onSling";
var score = 0; 
function preload() {
 
   backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    monster1 = new monster(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   
   
    hero = new hero(200,50);

   
    slingshot = new SlingShot(hero.body,{x:200, y:50});
}

function draw(){
   
        background(backgroundImg);
   
   
    textSize(30);
    fill("white");
    text("Score:"+score,width-300,50);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    monster1.display();
    monster1.score();
    
    box3.display();
    box4.display();
    monster3.display();
    monster3.score();
    

    hero.display();
    platform.display();
  
    slingshot.display();

function keyPressed(){
    if(keyCode === 32){
        hero.trajectory=[];
        Matter.Body.setPosition(hero.body, {x: 200 , y: 50});
        Matter.Body.setAngle(hero.body,0)
       slingshot.attach(hero.body);
       gameState="onSling";



