
function drawWeaves() {
  weaves = [];

  let colWeaves = weaveSpacing;
  let rowWeaves = Math.floor(weaveSpacing * (height / width));

  let spacingX = width / colWeaves;
  let spacingY = height / rowWeaves;
  let radius = (min(spacingX, spacingY) / 2);

  push();
  translate(width / 2, height / 2);

  for (let c = -1; c <= (colWeaves + 1); c++) {
    for (let r = -1; r <= (rowWeaves + 1); r++) {
      let offsetX = (r % 2) * spacingX / 2;
      let x = spacingX * c + offsetX;
      let y = spacingY * r;

      weaves.push(new Weave(x, y, radius * random(0.8, 1.2)));
    }
  }
  pop();
}


class Weave {
  constructor(centreX, centreY, weaveRadius) {
    this.centreX = centreX;
    this.centreY = centreY;
    this.weaveRadius = weaveRadius;
    this.strokewidth = 1;
    this.pointsOnCircle = 20;
    this.wovenLayers = 9;

    // Keep wave amplitude for bezier control points
    this.waveAmplitude = this.weaveRadius * 0.09;
  }

  display() {
    push();
    translate(this.centreX, this.centreY);
    noFill();

    // Dynamic color based on weaveColorSlider
    let intensity = weaveColorSlider.value();
    let overCol = color(intensity, 165, 0);   // Orange tone changes with slider
    let underCol = color(intensity, 105, 180); // Pink tone changes with slider

    for (let n = 0; n < this.wovenLayers; n++) {
      this.drawCircularWeave(this.weaveRadius * (1 * (n / 10)), overCol);
      this.drawCircularWeave(this.weaveRadius * 1.05 * (n / 10), underCol);
    }
    pop();
  }

  drawCircularWeave(radiusBase, colour) {
    stroke(colour);
    strokeWeight(this.strokewidth);

    for (let i = 0; i < this.pointsOnCircle; i++) {
      let angle1 = (i / this.pointsOnCircle) * 360;
      let angle2 = ((i + 1) / this.pointsOnCircle) * 360;

      let r1 = radiusBase;
      let r2 = radiusBase;

      let x1 = r1 * cos(angle1);
      let y1 = r1 * sin(angle1);
      let x2 = r2 * cos(angle2);
      let y2 = r2 * sin(angle2);

      // Control points for bezier curves (woven effect)
      let cx1 = (r1 - this.waveAmplitude) * cos(angle1 - 2);
      let cy1 = (r1 + this.waveAmplitude) * sin(angle1 + 2);
      let cx2 = (r2 - this.waveAmplitude) * cos(angle2 - 2);
      let cy2 = (r2 + this.waveAmplitude) * sin(angle2 + 2);

      let cx3 = (r1 + this.waveAmplitude) * cos(angle1 - 2);
      let cy3 = (r1 - this.waveAmplitude) * sin(angle1 + 2);
      let cx4 = (r2 + this.waveAmplitude) * cos(angle2 - 2);
      let cy4 = (r2 - this.waveAmplitude) * sin(angle2 + 2);

      bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
      bezier(x1, y1, cx3, cy3, cx4, cy4, x2, y2);
    }
  }
}

