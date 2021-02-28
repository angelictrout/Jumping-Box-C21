var canvas;
var music;
var ball,edges;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "brown";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "red";


    
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";

    ball.velocityX = 4;
    ball.velocityY = 5;
    
   
}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
    
    ball.bounceOff(edges);

   
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = block1.shapeColor;
        music.play();

    }

    if(block2.isTouching(ball)){
        ball.shapeColor = block2.shapeColor;
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();

    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = block3.shapeColor;

    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = block4.shapeColor;

    }


    drawSprites();
}
