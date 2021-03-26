var mouse, mouse2, mouse3, mouse4
var cat, cat2, cat3, cat4
var garden, gardenImg


function preload() {
    //load the images here
    mouse.loadImage("mouse1.png");
    mouse2.loadImage("mouse2.png");
    mouse3.loadImage("mouse3.png");
    mouse4.loadImage("mouse4.png");
    cat.loadImage("cat1.png");
    cat.loadImage("cat1.png");
    cat.loadImage("cat1.png");
    cat.loadImage("cat1.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");

    }    
}
