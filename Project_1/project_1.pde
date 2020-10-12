int rC;
int x;
int y;

void setup() {
  size(1000, 1000);
  background(25);
}


void draw() {
    int randomStars;

  randomStars= 40;

  randomStars= x +20;
  
  int randomStarss;
  randomStarrs = y +30;
  
  int movingStars;
  movingStars = x+10;
  // rC = (#FFFED7);
  // fill(rC);
  ////fill(255,254,215);
  // ellipse(500,500,100,100);

  starry();
  pushMatrix();
 starry();
 translate(randomStars, randomStarss);
}


void starry() {


  rC = (#FFFED7); //light yellow
  stroke(rC);
  fill(rC);
  //fill(255,254,215);

  beginShape();
  triangle(40, 40, 30, 50, 50, 50);
  triangle(40, 60, 30, 50, 50, 50);
  endShape();

 


}
