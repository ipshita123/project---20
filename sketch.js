var tom, tomImage;
var jerry,jerryImage;
var bgImage;

function preload() {
    tomImage = loadImage("images/cat1.png", "images/cat2.png" , "images/cat3.png", "images/cat4.png");
    jerryImage = loadImage("images/mouse1.png", "images/mouse2.png", "images/mouse3.png", "images/mouse4.png");
    bgImage = loadImage("images/garden.png");
}
function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(800,650);
    tom.addImage(tomImage);
    tom.scale = 0.25;

    jerry = createSprite(300,650);
    jerry.addImage(jerryImage);
    jerry.scale = 0.25;

}

function draw() {

    background(bgImage);

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
   tom.velocityX = -5;
   tom.addAnimation("tomRunning", tomImage2);
   tom.changeAnimation("tomRunning");
}
}
