const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var leftWall;
var rightWall;
var bridge;
var jointPoint;
var stones = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    frameRate(80);

    ground = new Base(windowWidth / 2, windowHeight - 87, 1200, 50);
    leftWall = new Base(100, height - 300, 200, height / 2 + 100);
    rightWall = new Base(width - 100, height - 300, 200, height / 2 + 100);

    bridge = new Bridge(30, { x: width - 100, y: height / 2 });

    jointPoint = new Link(bridge, jointPoint);
    Matter.Composite.add(bridge.body, jointPoint);


    for (var i = 0; i <= 8; i++) {
        var x = random(width / 2 - 200, width / 2 + 300);
        var y = random(-10, 140);
        var stone = new Stone(x, y, 80, 80);
        stones.push(stone);

    }

}

function draw() {
    background(51);
    Engine.update(engine);


    ground.show();
    leftWall.show();
    rightWall.show();
    bridge.show();
    //stone.show();

}