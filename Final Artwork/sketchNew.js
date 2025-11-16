
let img;
let weaves = [];
let weaveSpacing = 6;
let spacing = 12;
let lineSystem;

// Track last slider values
let lastNumLines, lastRadius;

function preload() {
  img = loadImage('assets/KT_Pathway_Avenue.jpg');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.drawingContext.getContextAttributes().willReadFrequently = true;
  angleMode(DEGREES);
  noFill();
  img.resize(width, height);

  drawSidebar();

  createSliders();

  drawWeaves();

  // Initialise line system with slider values
  lineSystem = new LineSystem(weaves, numLinesSlider.value(), radiusSlider.value());

  // Store initial slider values
  lastNumLines = numLinesSlider.value();
  lastRadius = radiusSlider.value();
}

function draw() {
  background(255);

  // Draw sidebar
  drawSidebar();

  // Update variables from sliders
  spacing = spacingSlider.value();

  // Check if number of lines have changed
  if (numLinesSlider.value() !== lastNumLines) {
    lineSystem.update(numLinesSlider.value(), radiusSlider.value());
    lastNumLines = numLinesSlider.value();
    lastRadius = radiusSlider.value();
  } else {

    // Update radius dynamically
    lineSystem.updateRadius(radiusSlider.value());
  }

  drawFlowField();

  lineSystem.render();

  // Draw weaves on top
  push();
  for (const weave of weaves) {
    weave.display();
  }
  pop();
}

function drawSidebar() {
  push();
  fill(0); // Black sidebar
  noStroke();
  rect(0, 0, 200, height); // Sidebar width = 200px
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  img.resize(width, height);
  drawWeaves();
}