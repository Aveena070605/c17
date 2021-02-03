var swordimage 
var fruit1image,fruit2image,fruit3image,fruit4image
var alienimage1,alienimage2
var sword
var fruit
var fruitgroup
var alien
var aliengroup
var PLAY=1
var END=0
var gamestate=PLAY
var score=0
var gameoverimage
var gameover
function preload(){
  swordimage=loadImage("sword.png")
  fruit1image=loadImage("fruit1.png")
  fruit2image=loadImage("fruit2.png")
  fruit3image=loadImage("fruit3.png")
  fruit4image=loadImage("fruit4.png")
  alienimage1=loadImage("alien1.png")
  alienimage2=loadImage("alien2.png")
  gameoverimage=loadImage("gameover.png")
}
function setup(){
  createCanvas(400,400)
  sword=createSprite(15,15,120,120)
  sword.addImage("swordimage",swordimage)
  sword.scale=0.5
  gameover=createSprite(200,200,10,10)
  gameover.addImage("gameoverimage",gameoverimage)
  gameover.visible=false
  fruitgroup=new Group()
  aliengroup=new Group()
}


function draw(){
  background("white")
drawSprites()
  text("score:"+score,20,20)
  if(gamestate===PLAY){
    fruits()
    monster()
    sword.x=mouseX
    sword.y=mouseY
  if(sword.isTouching(fruitgroup)){
    fruitgroup.destroyEach()
    score=score+1
  }
    if(sword.isTouching(aliengroup)){
      gamestate=END
    }
  }
  else if(gamestate===END){
    aliengroup.destroyEach()
    fruitgroup.destroyEach()
    aliengroup.setVelocityXEach=0
    aliengroup.setVelocityYEach=0
    fruitgroup.setVelocityXEach(0)
    fruitgroup.setVelocityYEach(0)
    gameover.visible=true
  }
    
}
function fruits(){
  if(frameCount%100===0){
    fruit=createSprite(random(1,400),random(1,400))
    fruit.velocityX=random(-5,5)
    fruit.velocityY=random(-5,5)
    fruit.lifetime=150
    
    var R=Math.round(random(1,4))
    switch(R){
        case 1:fruit.addImage(fruit1image)
        break
        case 2:fruit.addImage(fruit2image)
        break
        case 3:fruit.addImage(fruit3image)
        break
        case 4:fruit.addImage(fruit4image)
        break
        default:
        break
    }
        fruit.scale=0.2
        fruitgroup.add(fruit)
  }
    
}
  function monster(){
     if(frameCount%100===0){
    alien=createSprite(random(1,400),random(1,400))
    alien.velocityX=random(-5,5)
    alien.velocityY=random(-5,5)
    alien.lifetime=150
    alien.addImage(alienimage2)
    aliengroup.add(alien)
  }
  }
