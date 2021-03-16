var hr, hrAngle
var min, minAngle
var sec, secAngle




function setup() {
  var canvas = createCanvas(400,400);
  canvas.position(500,50)
  angleMode(DEGREES)
}

function draw() {
  background(0);  

  fill("white")
  text("12"  ,190,90)
  text("3" ,300,200 )
  text("6" ,200,330)
  text("9",75,200)
  


  text(mouseX+","+mouseY,100,100)
  drawSprites();
  translate(200,200)
  rotate(-90)

  hr= hour()
  min  = minute()
  sec = second()

  hrAngle = map(hr%12,0,12,0,360)
  minAngle = map(min,0,60,0,360)
  secAngle = map(sec,0,60,0,360)
  push()
  rotate(secAngle)
  strokeWeight(7)
  stroke(255,0,0)
  line(0,0,100,0)
  pop()
  
  push()
  rotate(minAngle)
  strokeWeight(7)
  stroke(0,255,0)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  strokeWeight(7)
  stroke(0,0,255)
  line(0,0,50,0)
  pop()
  strokeWeight(7)
  stroke(255,255,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,0,secAngle)

  stroke(0,255,0)
  arc(0,0,280,280,0,minAngle) 

  stroke(0,0,255)
  arc(0,0,260,260,0,hrAngle)
}