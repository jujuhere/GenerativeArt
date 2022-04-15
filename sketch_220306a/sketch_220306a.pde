int n = 200;


void setup(){
  size(1920,1080); 
  background(8, 21, 55);
  colorMode(HSB); 
}

void draw(){
  float x =frameCount;
  float r = map(x, 0, width, 2.6, 4.2 );
  float y= 0.1;
  for(int i=0;i<200;i++){
    stroke(200-i, 255,258);
    y= r*y*(1-y);
    point(x, 800*y);
  }
}

  
  
