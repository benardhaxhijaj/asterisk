let points = 6;
let step = 0;
let step2 = 0;
let strokeWeightValue = 3; // Set a fixed stroke weight

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
}

function draw() {
  background("lightPink");
  translate(windowWidth / 2, windowHeight / 2);
  noFill();

  // Set a solid color for strokes
  let strokeColor = color(0);

  let numberOfPoints = 3; // Increase or decrease the number of points
  let maxRadius = min(windowWidth, windowHeight) * 0.5; // Adjust the maximum radius

  stroke(strokeColor); // Use solid color for strokes
  strokeWeight(strokeWeightValue); // Use fixed stroke weight

  for (let i = 5; i < maxRadius; i += 5) {
    beginShape();
    for (let a = 0; a < TWO_PI; a += TWO_PI / numberOfPoints) {
      let sx = cos(a) * i;
      let sy = sin(a) * i;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    rotate(PI / (100 * cos(step2) + 120)); // Adjusted rotation speed
  }
  step += 0.02;
  step2 += 0.002;
}
