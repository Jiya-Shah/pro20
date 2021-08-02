var cat,mouse,catimg2,mimg1,bgimg,ground,catimg2,ming2
function preload() {
    //load the images here
    bgimg=loadImage("garden.png")
    ming1=loadImage("mouse1.png")
    catimg1=loadImage("cat1.png")
    catimg2=loadImage("cat2.png")
    ming2=loadImage("mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprtie(200,200)
    cat=addImage(cat1)
    mouse=createSprtie(200,100)
    mouse=addImage(mimg1)
    

}

function draw() {

    background("ground");
    //Write condition here to evalute if tom and jerry collide
if(keyDown("UP_ARROW")){
    cat.velocityX=2
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouse Teasing",mimg2)
    mouse.changeAnimation("mouse Teasing")
    mouse.frameDelay=25
}

if(keyCode===RIGHT_ARROW){
    cat.addAnimation("cat moving",catimg2)
    cat.changeAnimation("cat moving")
    cat.velocity.X=1
}

}
