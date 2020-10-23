int i;
int j;
int a;
int b;
Angel angel1;
Angel angel2;

void setup(){
 size(1000,1000);
 background(20);
 
 angel1 = new Angel(450, 200);
 angel2 = new Angel(700,400);
}

void draw(){
 starry2();
 starry();
 rainbow();
 angel1.display();
 
pushMatrix();
translate(300,100);
angel1.display();
popMatrix();

pushMatrix();
translate(-300,100);
angel1.display();
popMatrix();

  
}


void starry(){     //yellow stars
  //fill(#FFFED7);
 // ellipse(
 for (int i = 0; i <width; i+=70){
   for (int j= 0; j<height; j+=70){
     noStroke();
     fill(#FFFED7);
     //fill(0,0,255);
     ellipse(i,j,8,8);
   }
 }
}

void starry2(){    //purple rim outside yellow stars
  for (int a=0; a<width; a+=70){
    for (int b=0; b<height; b+=70){
      noStroke();
      fill(#b4b2d3);
      ellipse(a,b,12,12);
    }
  }
}

void rainbow(){
 
  if (mouseX<200){
    fill(#696969,100);
    rect(0,0,1000,1000);
  } 
  else if(mouseX <400){
   fill(#e7b7cc,100);
   rect(0,0,1000,1000);
  } else if (mouseX<600){
      fill(#b7d2d2,100);
      rect(0,0,1000,1000);
  } else if (mouseX<800){
        fill(#fffbd5,100);
        rect(0,0,1000,1000);
  } else if(mouseX<1000){
    fill(#c5b2d3,100);
    rect(0,0,1000,1000);
    
    
  }
  }
