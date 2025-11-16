/*
This function creates a morphing 'flow field' animation which uses an image as the base
Inspiration for this code was sourced from: 
https://editor.p5js.org/StevesMakerspace/sketches/RbULssOKQ
*/


function drawFlowField() {
  img.loadPixels(); // Load image for colour data

  tint(255, 255);
  image(img, 0, 0, width, height);

  let colorFactor = colorSlider.value(); // 0 = invert, 255 = original
  let invertAmount = map(colorFactor, 0, 255, 1, 0); // 1 = full invert, 0 = original

  // Loop through the canvas morphing circles, in a grid pattern
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {

      // Get pixel colours at x & y
      let index = (x + y * width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      // Invert colors based on slider
      let invR = 255 - r;
      let invG = 255 - g;
      let invB = 255 - b;

      // Blend between original and inverted colors
      let finalR = lerp(invR, r, colorFactor / 255);
      let finalG = lerp(invG, g, colorFactor / 255);
      let finalB = lerp(invB, b, colorFactor / 255);

      // Calculate brightness for size mapping
      let brightness = (r + g + b) / 3;

      // Base size depends on brightness, but make it MUCH larger
      let baseSize = map(brightness, 0, 255, 2, spacing * 8); // Increased max size

      // Add organic movement using Perlin noise
      let offsetX = map(noise(x * 0.01, y * 0.01, frameCount * 0.01), 0, 1, -3, 3);
      let offsetY = map(noise(x * 0.01 + 100, y * 0.01 + 100, frameCount * 0.01), 0, 1, -3, 3);

      // Draw coloured circle at x & y with offsets
      noStroke();
      fill(finalR, finalG, finalB, 255);
      ellipse(x + offsetX, y + offsetY, baseSize, baseSize);
    }
  }
}