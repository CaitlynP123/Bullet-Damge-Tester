var bullet, bulletRightEdge
var wall, wallLeftEdge
var speed, weight, thicknes

function setup() {
  createCanvas(1600,400);

  thickness = round(random(22,83))

  bullet = createSprite(50, 200, 100, 50);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)

  speed = round(random(223,321))
  weight = round(random(30,52))
}

function draw() {
  background("black");  

  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall.depth = bullet.depth
  bullet.depth += 1

  if(hasCollided(bullet,wallLeftEdge)){
    bullet.velocityX = 0
    wall.velocityX = 0
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if(damage>10){
    wall.shapeColor="red"
  }
  else if(damage<10){
    wall.shapeColor="green"
  }
  }

  drawSprites();
}

function hasCollided(sbullet,swall){
  bulletRightEdge = bullet.x+bullet.width
  wallLeftEdge = wall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}