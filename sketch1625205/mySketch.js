var seed = Math.random() * 2000;
var t;
var num;
var radius, mySize;
var sizes = [];

let colors = [];
var color1 = "white"; 

var color_setup1; 


function setup() {
	randomSeed(seed);
	mySize = (windowWidth, windowHeight);
	createCanvas(windowWidth, windowHeight);
	color_setup1 = color1; 
	colors[0] = color_setup1;
	colors[1] = color_setup1;
	colors[2] = color_setup1;
	colors[3] = color_setup1;

	background("#4490bd");
	num = 100;
	radius = mySize * 0.5;
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(random(0.1, 2))
	}

	t = 0;
}

function draw() {
	background("#4490bd");
	randomSeed(seed);
	
	push();
	translate(width / 2, height / 2);
	noFill();
	for (let i = 0; i < num; i++) {
		let a = (TAU / num) * i + t
		let x = radius * sin(a - t) / 1;
		let y = radius * cos(a - t) / random(1,1.5);
		stroke(random(colors));
		strokeWeight(sizes[i] / 0.25);
		let d = random(radius / 10, radius / 5);
		let x_plus = 2*random(-d, d);
		
		
		push();
	  translate(x + x_plus, y + d * cos(d) / 1);
		rotate(random(TAU) + t);
		circle(random((x + x_plus)/3*4,(x + x_plus)/3), random((y + d * cos(d) / 1)/3*4,(y + d * cos(d) / 1)/3), random(d/2.5));
		pop();
		
		push();
	  translate(x + x_plus, y + d * cos(d) / 1);
		rotate(random(TAU) + t);
		strokeWeight(sizes[i] / 1.25);
		circle(random((x + x_plus)/3*4,(x + x_plus)/3), random((y + d * cos(d) / 1)/3*4,(y + d * cos(d) / 1)/3), random(d/5));
		pop();
		
		push();
	  translate(x + x_plus, y + d * cos(d) / 1);
		rotate(random(TAU) + t);
		strokeWeight(sizes[i] / 1.25);
		circle(random((x + x_plus)/2*3,(x + x_plus)/2), random((y + d * cos(d) / 1)/2*3,(y + d * cos(d) / 1)/2), random(d/10));
		pop();
		
		push();
	  translate(x + x_plus, y + d * cos(d) / 1);
		rotate(random(TAU) + t);
		strokeWeight(sizes[i] / 1.0);
		circle(random((x + x_plus)/2*3,(x + x_plus)/2), random((y + d * cos(d) / 1)/2*3,(y + d * cos(d) / 1)/2), random(d/15));
		pop();
		
		push();
	  translate(x + x_plus, y + d * cos(d) / 1);
		rotate(random(TAU) + t);
		strokeWeight(sizes[i] / 1.0);
		circle(random((x + x_plus)/2*3,(x + x_plus)/2), random((y + d * cos(d) / 1)/2*3,(y + d * cos(d) / 1)/2), random(d/20));
		pop();
	}
	pop();
	t += random(0.001,0.0005);
}
