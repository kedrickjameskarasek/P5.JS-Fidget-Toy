let lightOn = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // draw light switch
  fill(150);
  rect(150, 150, 100, 200, 20);
  if (lightOn) {
    fill(255, 255, 0);
    ellipse(200, 250, 50, 50);
  }
  else {
    fill(150);
    ellipse(200, 300, 50, 50);
  }
}

function mouseClicked() {
  // check if light switch was clicked
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 350) {
    lightOn = !lightOn;
  }
}