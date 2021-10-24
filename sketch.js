const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;

//part 1
//level1
var block001, block002, block003, block004, block005, block006, block007; 

//level2
var block011, block012, block013, block014, block015;

//level3
var block021, block022, block023;

//level4
var block031;

//part2
//level
var block201, block202, block203, block204, block205;

//level2
var block211, block212, block213;

//level3
var block221;

//polygon
var polygon; 
var chain;

//platform
var ground, platform1, platform2

let img;
function preload() {
  img = loadImage('polygon.png');
}


function setup(){
    engine = Engine.create();
    world = engine.world; 
    createCanvas(600,600);
    image(img, 50, 0, 40, 20, 50, 50, 50, 50);
    //part1
    //level1
    block001 = new BlockLayer1(100, 495, 30, 40);
    block002 = new BlockLayer2(130, 495, 30, 40);
    block003 = new BlockLayer3(160, 495, 30, 40);
    block004 = new BlockLayer4(190, 495, 30, 40);
    block005 = new BlockLayer1(220, 495, 30, 40);
    block006 = new BlockLayer2(250, 495, 30, 40);
    block007 = new BlockLayer3(280, 495, 30, 40);

    //level2
    block011 = new BlockLayer4(130, 460, 30, 40);
    block012 = new BlockLayer1(160, 460, 30, 40);
    block013 = new BlockLayer2(190, 460, 30, 40);
    block014 = new BlockLayer3(220, 460, 30, 40);
    block015 = new BlockLayer4(250, 460, 30, 40);
    
   //level3
   block021 = new BlockLayer1(160, 425, 30, 40);
   block022 = new BlockLayer2(190, 425, 30, 40);
   block023 = new BlockLayer3(220, 425, 30, 40);

   //level4
   block031 = new BlockLayer4(190, 390, 30, 40);


   //part2
   //level1
   block201 = new BlockLayer1(380, 275, 30, 40);
   block202 = new BlockLayer2(410, 275, 30, 40);
   block203 = new BlockLayer3(440, 275, 30, 40);
   block204 = new BlockLayer4(470, 275, 30, 40);
   block205 = new BlockLayer1(500, 275, 30, 40);

   //level2
   block211 = new BlockLayer2(410, 240, 30, 40);
   block212 = new BlockLayer3(440, 240, 30, 40);
   block213 = new BlockLayer4(470, 240, 30, 40);

   //level3
   block221 = new BlockLayer1(440, 205, 30, 40);

    //platform
    ground = new Platform(300,600, 1200, 20);
    platform1 = new Platform(190, 525, 270, 20);
    platform2 = new Platform(440, 305, 210, 20)

 
   polygon = new Polygon( 100, 100, 50, 50);
   chain = new SlingShot(polygon.body,{x:100,y:200});



}

function draw(){
    background(180);

    Engine.update(engine);

    //part 1
    //level 1
    block001.display();
    block002.display();
    block003.display();
    block004.display();
    block005.display();
    block006.display();
    block007.display();

    //level 2
    block011.display();
    block012.display();
    block013.display();
    block014.display();
    block015.display();

    //level 3
    block021.display();
    block022.display();
    block023.display();

    // level 4
    block031.display();

    //part 2
    //level 1
    block201.display();
    block202.display();
    block203.display();
    block204.display();
    block205.display();

    //level 2 
    block211.display();
    block212.display();
    block213.display();

    //level 3
    block221.display();

    //ground
    ground.display();
    platform1.display();
    platform2.display();

    polygon.display();
    chain.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x : mouseX , y : mouseY});
}

function mouseReleased(){
  chain.fly();
}
