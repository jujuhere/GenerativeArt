
 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#FFFF00");
	
	circleX = width / 2
	circleY = height / 2
}

function draw() {
	
	
	fill(0); 
	
	
	if(dist(circleX, circleY, mouseX, mouseY) < 100){
		
	if(mouseIsPressed == true){
		fill("#FFFFFF"); 
	} else {
		fill("#FFFF00"); 
		
	}
	}
	
	
	
		circle(circleX, circleY, 200); 
	//	circle((width / 2) , (height / 2) , 20); 
	//	circle((width / 2) , (height / 2) , 20); 
 z = 0; 
	y = z * sin(width);
  x = z * cos(height);
			
	//	circle((random(sin(width))) , random(cos(height) ) , 20);
	//	circle(random(cos(width)) , random(sin(height) ) , 20);


	 // circle(random(y) , random(x ) , 20);
	//	circle(random(y) , random(x ) , 20);

		
		
	// z = z +1; 
	
	rotate(radians(frameCount%360)); 
	for(i = 0; i < 7; i++){
		push();
		rotate(TWO_PI * i / 7);
		ellipse(width / 2, height / 2, 50) ; 
		pop();
	}
	
	rotate(radians(frameCount%360)); 
	for(i = 0; i < 7; i++){
		push();
		rotate(TWO_PI * i / 7);
		ellipse(width / 4, height / 4, 50) ; 
		pop();
	}
	
	rotate(radians(frameCount%360)); 
	for(i = 0; i < 7; i++){
		push();
		rotate(TWO_PI * i / 7);
		ellipse(width / 1.3, height / 1.3, 50) ; 
		pop();
	}
	
	rotate(radians(frameCount%360)); 
	for(i = 0; i < 7; i++){
		push();
		rotate(TWO_PI * i / 7);
		ellipse(width / 1.1, height / 1.1, 50) ; 
		pop();
	}
	
		rotate(radians(frameCount%360)); 
	for(i = 0; i < 7; i++){
		push();
		rotate(TWO_PI * i / 7);
		ellipse(width / 8, height / 8, 50) ; 
		pop();
	}
	
		rotate(radians(frameCount%360)); 
	for(i = 0; i < 7; i++){
		push();
		rotate(TWO_PI * i / 7);
		ellipse(width / 2.75, height / 2.75, 50) ; 
		pop();
	}
	
	
		rotate(radians(frameCount%360)); 
	for(i = 0; i < 7; i++){
		push();
		rotate(TWO_PI * i / 7);
		ellipse(width / 1.55, height / 1.55, 50) ; 
		pop();
	}
	
	
	
	
}