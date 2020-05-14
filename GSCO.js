var wall,thickness;
var bullet,speed,weight


function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(30,52);
  thickness=random(22,83)

 bullet = createSprite(100, 200, 80, 50);
 bullet.shapeColor="white"; 
 bullet.velocityX=speed;
  wall = createSprite(1500,200,60,750);
  wall.shapeColor='white';

}

function draw() {
  background(0,0,0);
   
  if (isTouching(bullet,wall)){
    console.log("check")
   bullet.velocityX=0;
    var damage= 0.5 * bulletWeight * bulletSpeed * bulletSpeed /thicknessofwall *thicknessofwall *thicknessofwall ;

   if(damage>10){
   bullet.shapeColor=color("red");
   }

   if(damage<10){
     wall.shapeColor=color("green");
   }
    } 

      drawSprites ();
}
