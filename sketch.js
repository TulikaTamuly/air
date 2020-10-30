var PLAY=1
var END=0
var gameState=PLAY
var Score=0
var bomb,bb,bomb1,b22
var restart,rr
var ship,sh,backGr,back

function preload(){
 bb=loadImage("at.png")
 b22=loadImage("b12.png")
  sh=loadImage("ship.png")
  back=loadImage("backGround.png")
  rr=loadImage("restart.png")
}
function setup(){
  createCanvas(600,450)
  backGr=createSprite(300,200)
  backGr.addImage("bg",back)
  backGr.scale=0.8
  
 
  bG=new Group()
  bgG=new Group()
   ship=createSprite(120,200)
  ship.addImage("ss",sh)
  ship.scale=0.4
  
  restart=createSprite(300,200)
  restart.addImage("r",rr)
  restart.scale=0.5
  ship.debug=false
  ship.setCollider("circle",0,0,100)
}
function draw(){
  background("white")
  fill("black")
  textSize(24)
  text("Score:  "+Score,100,425)
  
  if(gameState===PLAY){
   backGr.velocityX=-10-Score/5
  if(backGr.x<100){
    backGr.x=300
  }
  
  Score=Score+(frameCount%5===0)
  ship.y=mouseY
  
  ob1()
  ob2()
    
  restart.visible=false
    
  if(bG.isTouching(ship)){
    backGr.velocityX=0
    bG.setVelocityXEach(0)
    bgG.setVelocityXEach(0)
    gameState=END
  }
   if(bgG.isTouching(ship)){
    backGr.velocityX=0
    bG.setVelocityXEach(0)
    bgG.setVelocityXEach(0)
     gameState=END
    
  } 
  }
  else if(gameState===END){
    textSize(30)
    text("You Lose",250,425)
    restart.visible=true
    if(mousePressedOver(restart)){
      gameState=PLAY
      bG.destroyEach()
      bgG.destroyEach()
      Score=0
      
    }
  }
  
  
  drawSprites()
}



function ob1(){
  if(frameCount%40===0){
   bomb=createSprite(700,random(50,350))
  bomb.addImage("b",bb)
  bomb.velocityX=-15 -Score/10
    bomb.scale=0.3
    bG.add(bomb)
    bomb.depth=ship.depth
  }
 
}


function ob2(){
  if(frameCount%60===0){
   bomb1=createSprite(700,random(50,350))
  bomb1.addImage("b3",b22)
  bomb1.velocityX=-15 -Score/10
    bomb1.scale=0.4
    bgG.add(bomb1)
    bomb1.depth=ship.depth
    bomb1.debug=false
  }
  
}














































































































































































































































































