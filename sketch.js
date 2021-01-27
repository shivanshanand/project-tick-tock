var hr,mn,sc;
var circle;

function preload(){

}

function setup() {
  createCanvas(600,600);

  angleMode(DEGREES);

}

function draw() {
  background("white");  
  //drawSprites();
  translate(200,200);
  rotate(-90);

  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

 // console.log(hour());

  push();
  rotate(scAngle);
  stroke("red");
  line(0,0,40,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  line(0,0,50,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,30,0);
  pop();

  stroke("red");
  strokeWeight(7);
  arc(10, 30, 320, 320, 0, scAngle);

  stroke("green");
  strokeWeight(7);
  arc(20, 30, 260, 260, 0, mnAngle);

  stroke("blue");
  strokeWeight(7);
  arc(30, 30, 200, 200, 0, hrAngle);

}