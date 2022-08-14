






function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	// xScale = width / 20; 
	// yScale = height / 20 * (width / height); 
	
	// color = "#0EE2FF"
	
	
	
}

function draw() {
	
	for(let i = 0; i < 200; i++){
		circle(width / 2, height / 2, 200); 
	//	circle((width / 2) + i, (height / 2) / i, 20); 
	//	circle((width / 2) - i, (height / 2) / i, 20); 
		if(i < 0.05){
			
		circle(random(width) - i, random(height ) + i, 20);
		circle(random(width) + i, random(height ) - i, 20);
			
		}
		circle(width/2 + i, height/2 + i, 200); 
	  circle(width/2 - i, height/2 - i, 200); 
		circle(width/2 + i, height/2 - i, 200);
		circle(width/2 - i, height/2 + i, 200);
		
		
		
	
	}
	
	
}