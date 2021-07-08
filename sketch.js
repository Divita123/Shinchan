var shinchan,shin_img;
var backGround,backGround_img;
var score=0;
var img1,img2,img3,img4;
var car,rand,invisibleGround;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var carsGrup,choco_group,choco_group2,choco_group3,choco_group4,choco_group5,choco_group6,choco_group7,choco_group8,choco_group9,choco_group10;
var choco_group11,choco_group12,choco_group13,choco_group14,choco_group15,choco_group16,choco_group17,choco_group18,choco_group19,choco_group20;
var score = 0;
var points=0;
var but;

function preload(){
  backGround_img=loadImage("v.jpg");
  shin_img=loadAnimation("shin1.png","shin2.png");
  shinchan_jump = loadAnimation("shin3.png");
  shinchan_stop = loadAnimation("shin1.png");
  img1=loadImage("c1.png");
  img2=loadImage("c2.png");
  img5=loadImage("c3.png");
  img3=loadImage("b.png");
  img4=loadImage("s.png");
  bi1=loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");
  bi2=loadAnimation("bird21.png","bird22.png","bird23.png","bird24.png");
  but=loadSound("button.wav");
  collect_sound=loadSound("so4.wav");
  chocoImage=loadImage("chips1.png");
  song=loadSound("shinchan_theme.mp3");
  lose=loadSound("losing.wav")
  over=loadImage("gameover.png");
}
function setup(){
  // createCanvas(700,350);
  createCanvas(1150,500);
  carsGroup = createGroup();
  topGroup = createGroup();
  choco_group = createGroup();
  choco_group2 = createGroup();
  choco_group3 = createGroup();
  choco_group4 = createGroup();
  choco_group5 = createGroup();
  choco_group6 = createGroup();
  choco_group7 = createGroup();
  choco_group8 = createGroup();
  choco_group9 = createGroup();
  choco_group10 = createGroup();
  choco_group11 = createGroup();
  choco_group12 = createGroup();
  choco_group13 = createGroup();
  choco_group14 = createGroup();
  choco_group15 = createGroup();
  choco_group16 = createGroup();
  choco_group17 = createGroup();
  choco_group18 = createGroup();
  choco_group19 = createGroup();
  choco_group20 = createGroup();
  
    backGround=createSprite(250,230);
    backGround.addImage(backGround_img);
    backGround.scale=0.5;

   invisibleGround = createSprite(200,470,400,10);
   invisibleGround.visible = false;

   go = createSprite(2000,250,400,10);
   go.visible = false;
   go.addImage(over);
   
  //(570,250,400,10)

  shinchan = createSprite(120,415,20,20);
  shinchan.addAnimation("shin",shin_img);
  shinchan.addAnimation("shin2",shinchan_jump);
  shinchan.addAnimation("shin3",shinchan_stop);
  shinchan.scale=0.55;
  
  song.loop();
 
 }
function draw(){
  background(0);
  if(gameState===PLAY){
    backGround.velocityX=-8;
  score = score + Math.round(frameCount/175);
  go.visible = false;
if(shinchan.y<355){
  shinchan.changeAnimation("shin2",shinchan_jump);
}

if(shinchan.y>355){
  shinchan.changeAnimation("shin",shin_img);
}

if(shinchan.isTouching(topGroup)){
  shinchan.changeAnimation("shin",shin_img);
}

  if(backGround.x<0-800){
    backGround.x=500;
  }
    spawnCars();
    spawnCarsTop();
    spawnChocos();
    spawnChocos2();
    spawnChocos3();
    spawnChocos4();
    spawnChocos5();
    spawnChocos6();
    spawnChocos7();
    spawnChocos8();
    spawnChocos9();
    spawnChocos10();
    spawnChocos11();
    spawnChocos12();
    spawnChocos13();
    spawnChocos14();
    spawnChocos15();
    spawnChocos16();
    spawnChocos17();
    spawnChocos18();
    spawnChocos19();
    spawnChocos20();
    
if(shinchan.isTouching(choco_group)){
   points=points+1;
   collect_sound.play();
   choco_group.destroyEach(0);}
    
if(shinchan.isTouching(choco_group2)){
   points=points+1;
   collect_sound.play();
   choco_group2.destroyEach(0);}
 
if(shinchan.isTouching(choco_group3)){
   points=points+1;
   collect_sound.play();
   choco_group3.destroyEach(0);}
    
if(shinchan.isTouching(choco_group4)){
   points=points+1;
   collect_sound.play();
   choco_group4.destroyEach(0);}
    
if(shinchan.isTouching(choco_group5)){
   points=points+1;
   collect_sound.play();
   choco_group5.destroyEach(0);}
     
if(shinchan.isTouching(choco_group6)){
   points=points+1;
   collect_sound.play();
   choco_group6.destroyEach(0);}
    
if(shinchan.isTouching(choco_group7)){
   points=points+1;
   collect_sound.play();
   choco_group7.destroyEach(0);}
 
if(shinchan.isTouching(choco_group8)){
   points=points+1;
   collect_sound.play();
   choco_group8.destroyEach(0);}
    
if(shinchan.isTouching(choco_group9)){
   points=points+1;
   collect_sound.play();
   choco_group9.destroyEach(0);}
    
if(shinchan.isTouching(choco_group10)){
   points=points+1;
   collect_sound.play();
   choco_group10.destroyEach(0);}
if(shinchan.isTouching(choco_group11)){
   points=points+1;
   collect_sound.play();
   choco_group11.destroyEach(0);}
    
if(shinchan.isTouching(choco_group12)){
   points=points+1;
   collect_sound.play();
   choco_group12.destroyEach(0);}
 
if(shinchan.isTouching(choco_group13)){
   points=points+1;
   collect_sound.play();
   choco_group13.destroyEach(0);}
    
if(shinchan.isTouching(choco_group14)){
   points=points+1;
   collect_sound.play();
   choco_group14.destroyEach(0);}
    
if(shinchan.isTouching(choco_group15)){
   points=points+1;
   collect_sound.play();
   choco_group15.destroyEach(0);}
     
if(shinchan.isTouching(choco_group16)){
   points=points+1;
   collect_sound.play();
   choco_group16.destroyEach(0);}
    
if(shinchan.isTouching(choco_group17)){
   points=points+1;
   collect_sound.play();
   choco_group17.destroyEach(0);}
 
if(shinchan.isTouching(choco_group18)){
   points=points+1;
   collect_sound.play();
   choco_group18.destroyEach(0);}
    
if(shinchan.isTouching(choco_group19)){
   points=points+1;
   collect_sound.play();
   choco_group19.destroyEach(0);}
    
if(shinchan.isTouching(choco_group20)){
   points=points+1;
   collect_sound.play();
   choco_group20.destroyEach(0);}
    if(shinchan.isTouching(carsGroup)){
      lose.play();
      gameState=END;
    }
    if(keyDown("space")&& shinchan.y >= 320) {
        shinchan.velocityY = -12;
    }
    
    //add gravity
    shinchan.velocityY = shinchan.velocityY + 0.8
  }
  else if( gameState===END){
    go.x=570;
  song.stop();
  go.visible = true;
  shinchan.changeAnimation("shin3",shinchan_stop);
  shinchan.velocityY=0;
  shinchan.velocityX=0;
  backGround.velocityX=0;



    topGroup.setLifetimeEach(-1);    
    topGroup.setVelocityXEach(0);

    carsGroup.setLifetimeEach(-1);    
     carsGroup.setVelocityXEach(0);
    
     choco_group.setLifetimeEach(-1);    
     choco_group.setVelocityXEach(0);
    
    choco_group2.setLifetimeEach(-1);    
     choco_group2.setVelocityXEach(0);
    
    choco_group3.setLifetimeEach(-1);    
     choco_group3.setVelocityXEach(0);
    
    choco_group4.setLifetimeEach(-1);    
     choco_group4.setVelocityXEach(0);
    
    choco_group5.setLifetimeEach(-1);    
     choco_group5.setVelocityXEach(0);
    
    choco_group6.setLifetimeEach(-1);    
     choco_group6.setVelocityXEach(0);
    
    choco_group7.setLifetimeEach(-1);    
     choco_group7.setVelocityXEach(0);
    
    choco_group8.setLifetimeEach(-1);    
     choco_group8.setVelocityXEach(0);
    
    choco_group9.setLifetimeEach(-1);    
     choco_group9.setVelocityXEach(0);
    
    choco_group10.setLifetimeEach(-1);    
     choco_group10.setVelocityXEach(0);
    
    choco_group11.setLifetimeEach(-1);    
     choco_group11.setVelocityXEach(0);
    
    choco_group12.setLifetimeEach(-1);    
     choco_group12.setVelocityXEach(0);
    
    choco_group13.setLifetimeEach(-1);    
     choco_group13.setVelocityXEach(0);
    
    choco_group14.setLifetimeEach(-1);    
     choco_group14.setVelocityXEach(0);
    
    choco_group15.setLifetimeEach(-1);    
     choco_group15.setVelocityXEach(0);
    
    choco_group16.setLifetimeEach(-1);    
     choco_group16.setVelocityXEach(0);
    
    choco_group17.setLifetimeEach(-1);    
     choco_group17.setVelocityXEach(0);
    
    choco_group18.setLifetimeEach(-1);    
     choco_group18.setVelocityXEach(0);
    
    choco_group19.setLifetimeEach(-1);    
     choco_group19.setVelocityXEach(0);
    
    choco_group20.setLifetimeEach(-1);    
     choco_group20.setVelocityXEach(0);

     if(mousePressedOver(go)){
      reset();
      but.play();
      }

  }
  shinchan.collide(invisibleGround);
  shinchan.collide(topGroup);
  spawnBird();
  spawnBird2();
  drawSprites();
  stroke("black");
  strokeWeight(3);
  textSize(25);
  fill("yellow");
  text("Distance: "+ score, 10,30);
  stroke("black");
  strokeWeight(3);
  textSize(25);
  fill("yellow");
  text("Points:     "+ points, 10,60);
}
function spawnCars(){
  if (frameCount %120===0){
  car=createSprite(1150,435,20,20);
  car.velocityX=-7.5;
  car.scale=0.95;
  car.debug=false;
  car.setCollider("rectangle",0,0,175,50);
  rand=Math.round(random(1,4));
  switch(rand){
    case 1:car.addImage(img1);
      break;
    case 2:car.addImage(img2);
      break;
    case 3:car.addImage(img3);
      break;
    case 4:car.addImage(img5);
      break;
    default: break;
    
    
  }
              car.lifetime = 800;

    carsGroup.add(car);
}
}
  function spawnChocos(){
      if (frameCount % 600 === 0){
        var coco = createSprite(1150,210,10,40);
          coco.velocityX = -2;
          coco.addImage(chocoImage);         
          coco.scale = 0.1;
          coco.lifetime = 800;
          choco_group.add(coco);
      }
     }
    function spawnChocos2(){
      if (frameCount % 600 === 0){
        var coco2 = createSprite(1150+30,210,10,40);
          coco2.velocityX = -2;
          coco2.addImage(chocoImage);         
          coco2.scale = 0.1;
          coco2.lifetime = 800;
          choco_group2.add(coco2);
      }
     }
     function spawnChocos3(){
      if (frameCount % 600 === 0){
        var coco3 = createSprite(1150+60,210,10,40);
          coco3.velocityX = -2;
          coco3.addImage(chocoImage);         
          coco3.scale = 0.1;
          coco3.lifetime = 800;
          choco_group3.add(coco3);
      }
     }
     function spawnChocos4(){
      if (frameCount % 600 === 0){
        var coco4 = createSprite(1150+90,210,10,40);
          coco4.velocityX = -2;
          coco4.addImage(chocoImage);         
          coco4.scale = 0.1;
          coco4.lifetime = 800;
          choco_group4.add(coco4);
      }
     }
     function spawnChocos5(){
      if (frameCount % 600 === 0){
        var coco5 = createSprite(1150+120,210,10,40);
          coco5.velocityX = -2;
          coco5.addImage(chocoImage);         
          coco5.scale = 0.1;
          coco5.lifetime = 800;
          choco_group5.add(coco5);
      }
     }
function spawnChocos6(){
      if (frameCount % 600 === 0){
        var coco6 = createSprite(1150+150,210,10,40);
          coco6.velocityX = -2;
          coco6.addImage(chocoImage);         
          coco6.scale = 0.1;
          coco6.lifetime = 800;
          choco_group6.add(coco6);
      }
     }
    function spawnChocos7(){
      if (frameCount % 600 === 0){
        var coco7 = createSprite(1150+180,210,10,40);
          coco7.velocityX = -2;
          coco7.addImage(chocoImage);         
          coco7.scale = 0.1;
          coco7.lifetime = 800;
          choco_group7.add(coco7);
      }
     }
     function spawnChocos8(){
      if (frameCount % 600 === 0){
        var coco8 = createSprite(1150+210,210,10,40);
          coco8.velocityX = -2;
          coco8.addImage(chocoImage);         
          coco8.scale = 0.1;
          coco8.lifetime = 800;
          choco_group8.add(coco8);
      }
     }
     function spawnChocos9(){
      if (frameCount % 600 === 0){
        var coco9 = createSprite(1150+240,210,10,40);
          coco9.velocityX = -2;
          coco9.addImage(chocoImage);         
          coco9.scale = 0.1;
          coco9.lifetime = 800;
          choco_group9.add(coco9);
      }
     }
     function spawnChocos10(){
      if (frameCount % 600 === 0){
        var coco10 = createSprite(1150+270,210,10,40);
          coco10.velocityX = -2;
          coco10.addImage(chocoImage);         
          coco10.scale = 0.1;
          coco10.lifetime = 800;
          choco_group10.add(coco10);
      }
     }
function spawnChocos11(){
      if (frameCount % 600 === 0){
        var coco11 = createSprite(1200,435,10,40);
          coco11.velocityX = -2;
          coco11.addImage(chocoImage);         
          coco11.scale = 0.1;
          coco11.lifetime = 800;
          choco_group11.add(coco11);
      }
     }
    function spawnChocos12(){
      if (frameCount % 600 === 0){
        var coco12 = createSprite(1200+30,435,10,40);
          coco12.velocityX = -2;
          coco12.addImage(chocoImage);         
          coco12.scale = 0.1;
          coco12.lifetime = 800;
          choco_group12.add(coco12);
      }
     }
     function spawnChocos13(){
      if (frameCount % 600 === 0){
        var coco13 = createSprite(1200+60,435,10,40);
          coco13.velocityX = -2;
          coco13.addImage(chocoImage);         
          coco13.scale = 0.1;
          coco13.lifetime = 800;
          choco_group13.add(coco13);
      }
     }
     function spawnChocos14(){
      if (frameCount % 600 === 0){
        var coco14 = createSprite(1200+90,435,10,40);
          coco14.velocityX = -2;
          coco14.addImage(chocoImage);         
          coco14.scale = 0.1;
          coco14.lifetime = 800;
          choco_group14.add(coco14);
      }
     }
     function spawnChocos15(){
      if (frameCount % 600 === 0){
        var coco15 = createSprite(1200+120,435,10,40);
          coco15.velocityX = -2;
          coco15.addImage(chocoImage);         
          coco15.scale = 0.1;
          coco15.lifetime = 800;
          choco_group15.add(coco15);
      }
     }
function spawnChocos16(){
      if (frameCount % 600 === 0){
        var coco16 = createSprite(1200+150,435,10,40);
          coco16.velocityX = -2;
          coco16.addImage(chocoImage);         
          coco16.scale = 0.1;
          coco16.lifetime = 800;
          choco_group16.add(coco16);
      }
     }
    function spawnChocos17(){
      if (frameCount % 600 === 0){
        var coco17 = createSprite(1200+180,435,10,40);
          coco17.velocityX = -2;
          coco17.addImage(chocoImage);         
          coco17.scale = 0.1;
          coco17.lifetime = 800;
          choco_group17.add(coco17);
      }
     }
     function spawnChocos18(){
      if (frameCount % 600 === 0){435
        var coco18 = createSprite(1200+210,435,10,40);
          coco18.velocityX = -2;
          coco18.addImage(chocoImage);         
          coco18.scale = 0.1;
          coco18.lifetime = 800;
          choco_group18.add(coco18);
      }
     }
     function spawnChocos19(){
      if (frameCount % 600 === 0){
        var coco19 = createSprite(1200+240,435,10,40);
          coco19.velocityX = -2;
          coco19.addImage(chocoImage);         
          coco19.scale = 0.1;
          coco19.lifetime = 800;
          choco_group19.add(coco19);
      }
     }
     function spawnChocos20(){
      if (frameCount % 600 === 0){
        var coco20 = createSprite(1200+270,435,10,40);
          coco20.velocityX = -2;
          coco20.addImage(chocoImage);         
          coco20.scale = 0.1;
          coco20.lifetime = 800;
          choco_group20.add(coco20);
      }
     }
     function spawnCarsTop(){
      if (frameCount %120===0){
      var top=createSprite(1145,400,215,10);
      top.velocityX=-7.5;
      top.scale=0.7;
      top.debug=false;
      top.visible=false;
      top.lifetime = 800;
    
        topGroup.add(top);
    }
    }
    function spawnBird(){
      if(frameCount % 200 === 0){
        var bird = createSprite(5,180,20,20);
        bird.y=Math.round(random(30,120));
        bird.addAnimation("bird",bi1);
        bird.velocityX=3;
        bird.scale=0.5
      }
    }
    function spawnBird2(){
      if(frameCount % 170 === 0){
        var bird2 = createSprite(10,180,20,20);
        bird2.y=Math.round(random(60,100));
        bird2.addAnimation("bird2",bi2);
        bird2.velocityX=3;
        bird2.scale=0.5
      }
    }
    function reset(){
 gameState=PLAY;
 song.play();
 score=0;
 points=0;
carsGroup.destroyEach();
topGroup.destroyEach();
choco_group.destroyEach();
choco_group2.destroyEach();
choco_group3.destroyEach();
choco_group4.destroyEach();
choco_group5.destroyEach();
choco_group6.destroyEach();
choco_group7.destroyEach();
choco_group8.destroyEach();
choco_group9.destroyEach();
choco_group10.destroyEach();
choco_group11.destroyEach();
choco_group12.destroyEach();
choco_group13.destroyEach();
choco_group14.destroyEach();
choco_group15.destroyEach();
choco_group16.destroyEach();
choco_group17.destroyEach();
choco_group18.destroyEach();
choco_group19.destroyEach();
choco_group20.destroyEach();
    }
//     var ball;
// var score = 0;
// var lives = 3;
// var gamestate = "serve";
// ball = createSprite(200,200,10,10);
// ball.setAnimation("golfball_1");
// ball.scale = 0.05;

// var paddle = createSprite(200, 350, 120, 10);
// paddle.shapeColor = color(0,0,255);

// createEdgeSprites();

// var bricks = createGroup();

// function createBrickRow(y, color) {
//   for(c=0; c<6; c++)
//   {
//     var brick = createSprite(65+54*c,y,50, 25);
//     brick.shapeColor = color;
//     bricks.add(brick);
//   }
// }

// createBrickRow(65, "red");
// createBrickRow(65+29, "orange");
// createBrickRow(65+29+29, "green");
// createBrickRow(65+29+29+29, "yellow");

// function draw() {
//   background("black");
  
//   textSize(20);
//   text("Score: "+score,40,25);
//   text("Lives: "+lives, 40, 45);
  
//   if(gamestate == "serve"){
//     text("Click to serve the ball.", 120,250);
//     ball.velocityX =0;
//     ball.velocityY =0;
//     ball.x = 200;
//     ball.y = 200;
//   }
//   else if(gamestate =="over") {
//     text("Game Over", 150, 250);
//     ball.remove;
//   }
//   else {
//     gameplay();
//   }
  
//   drawSprites();
// }

// function mousePressed()
// {
//   ball.velocityX = 10;
//   ball.velocityY = 6;
  
//   if(gamestate == "serve"){
//     gamestate = "play";
//     ball.velocityY = -7;
//     ball.velocityX = -7;
//   }
  
// }

// function brickHit(ball, brick) {
//  playSound("sound://category_hits/puzzle_game_button_04.mp3");
//  brick.remove();
//  score = score+5;
  
// }

// function lifeover(){
//   lives = lives - 1;
//   if(lives>=1) {
//     gamestate = "serve";
//   }
//   else {
//     gamestate = "end";
//   }
// }

// function gameplay(){
//   paddle.x = World.mouseX;
  
//   if(paddle.x < 60)
//   {
//     paddle.x = 60;
//   }
    
//   if(paddle.x > 340)
//   {
//     paddle.x = 340;
//   }
//   //rotation = rotation + 5;
//   ball.bounceOff(topEdge);
//   ball.bounceOff(leftEdge);
//   ball.bounceOff(rightEdge);
//   //ball.bounceOff(paddle);
//   ball.bounceOff(bricks, brickHit);
//   if(ball.bounceOff(paddle))
//   {
//     playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3");
//   }
//   if(!bricks[0])
//   {
//     //console.log("Won");
//     ball.velocityX = 0;
//     ball.velocityY = 0;
//     text("Well Done!!",150,200);
//   }
//   if(ball.isTouching(bottomEdge)) {
//     lifeover();
//   }
// }