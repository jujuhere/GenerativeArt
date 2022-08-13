
var booms = [] ; 
let colors = []; 

let xScale, yScale, centerX, centerY ; 


var  color1 ; 
var  color2 ; 
var  color3 ; 
var  color4 ; 
var  color5 ;

    color1 = "#E408C3"; 
    color2 = "#FFFF00"; 
    color3 = "#BE2121"; 
    color4 = "#9AA8EE"; 
    color5 = "#F3B70B";







function setup() {
	createCanvas(windowWidth, windowHeight);
	
	xScale = width/20;
	yScale = height/20*(width/height);
	
	centerX = width/2;
	centerY = height/2;
	
	if (key == "a"){
     color1 = "#0EE2FF"; 
     color2 = "#DEFE4E"; 
     color3 = "#FC0A7F"; 
     color4 = "#1EE7F1"; 
     color5 = "#B84822"; 
	
}
	
	colors = [color1, color2, color3, color4, color5] ;
}


function draw() {
	
	if(mouseIsPressed){
		for(let i = 0; i < 20; i++){
			let x = mouseX + random(-100, 100);
			let y = mouseY + random(-100, 100);
			var boom = {
				x : (x-centerX)/xScale, 
				y : (y-centerY)/yScale,
				size : random(1, 5),
				lastX : x,
				lastY : y,
				color : colors[floor(random(colors.length))],
				direction : random(0.1, 1) * (random() > 0.5 ? 1 : -1)
			};
		
			booms.push(boom);
		}
	}
	
	var length = booms.length;
	if(length == 0){
		background(0); 
		return;
	}
	
	noStroke(); 
	fill(26, 6, 51, 10);
	keyPressed() ; 
	
	

	var stepsize = deltaTime*0.002;
	for(var i = length-1; i >= 0; i--){
		let boom = booms[i];

		var x = Math.cos(boom.y);
		var y = Math.sin(boom.x);
		
		x = (boom.x-centerX)/xScale;
		y = yScale*boom.y+centerY;

		
		stroke(boom.color);
		strokeWeight(boom.size);
		line(x, y, boom.lastX, boom.lastY);
		boom.lastX = x;
		boom.lastY = y;
		
		
		
		}
	
	function keyPressed() {
  if (key == ' ') {
	   rect(0, 0, width, height); 
		return 
  }
		
		
	
}
	
	
}




