let i;
let j;
let a;
let b;
let x2=0;
let x3=0;
let x4=0;
let x5=0;
let Angel_angel1;

function setup() {
  createCanvas(1000, 800);
  background(20);

  angel1 = new Angel(450, 200);
}
function draw() {
  starry2();
  starry();
   rainbow();
  crystal4();
  clouds();
  sun();
   display();
  crystal2();
  push();
  translate(300,100);
  display();
  pop();
  push();
  translate(-300,100);
  display();
  pop();
  crystal();
  crystal3();

}
function starry() {     //yellow stars
  for (let i = 0; i <width; i+=70) {
    for (let j= 0; j<height; j+=70) {
      noStroke();
      fill(255,254,215);
      //fill(0,0,255);
      ellipse(i, j, 8, 8);
    }
  }
}
function starry2() {    //purple rim outside yellow stars
  for (let a=0; a<width; a+=70) {
    for (let b=0; b<height; b+=70) {
      noStroke();
      fill(180,178,211);
      ellipse(a, b, 12, 12);
    }
  }
}
function clouds() {
  fill(255);
  ellipse(0, 800, 400, 300);
  ellipse(300, 750, 400, 300);
  ellipse(500, 800, 400, 300);
  ellipse(700, 900, 400, 300);
  ellipse(950, 850, 400, 300);
}
function sun() {
  fill(251,241,211);
  ellipse(60, 100, 80, 80);
}
function crystal() {
  fill(241,211,251);
  rect(x2, 600, 30, 80);
  x2 = x2+5;
  if (x2>width) {
    x2=0;
  }
}
function rainbow() {
  if (x2<200) {
    fill(105,105,105, 100);
    rect(0, 0, 1000, 1000);
  } else if (x2 <400) {
    fill(231,183,204, 100);
    rect(0, 0, 1000, 1000);
  } else if (x2<600) {
    fill(183,210,210, 100);
    rect(0, 0, 1000, 1000);
  } else if (x2<800) {
    fill(255,251,213, 100);
    rect(0, 0, 1000, 1000);
  } else if (x2<1000) {
    fill(197,178,211, 100);
    rect(0, 0, 1000, 1000);
  }
}
function crystal2() {
  fill(178,248,231);
  rect(x3, 300, 30, 80);
  x3 = x3+7;
  if (x3>width) {
    x3=0;
  }
}
function crystal3() {
  fill(230,248,178);
  rect(x4, 450, 30, 80);
  x4 = x4+9;
  if (x4>width) {
    x4=0;
  }
}
function crystal4() {
  fill(248,178,196);
  rect(x5, 200, 30, 80);
  x5 = x5+6;
  if (x5>width) {
    x5=0;
  }
}
 class Angel{
  }
  
  function display (){
  //halo
  fill(227,221,197);
  ellipse(490,160,125,15);
  
   //wing branch
  fill(255);
  rect(430,275,120,20);
  
  //wings
  fill(255);
  ellipse(width/2,250,550,40);
  ellipse(width/2,275,500,50);
  ellipse(width/2,300,450,40);
  
 //  //gap
 //fill(255,10);
 //ellipse(495,250,230,50);
 
  // head
  fill(255);
 ellipse(490, 200, 60,60);
  
  //green triangle
  fill(189,211,203);
   triangle(490,240,390,510,590,510);
   
  
  //torso
  fill(255);
  triangle(490,250,400,500,580,500);


 
}