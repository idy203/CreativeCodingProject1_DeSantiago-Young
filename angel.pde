

class Angel{
  
  int xLoc;
  int yLoc;
  
  Angel( int  x_, int y_){
    
    xLoc = x_;
    yLoc = y_;
    
  }
  
  void display (){
  //halo
  fill(#e3ddc5);
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
  fill(#bdd3cb);
   triangle(490,240,390,510,590,510);
   
  
  //torso
  fill(255);
  triangle(490,250,400,500,580,500);


 
}
}
