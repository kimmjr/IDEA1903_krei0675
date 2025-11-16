/* 
This class manages a group of animated lines that orbit around 
weaves from 251107_circularweave.js
*/



class LineSystem {
  constructor(weaves, numLines, dynamicRadius) {
    this.weaves = weaves;
    this.lines = [];
    this.buildLines(numLines, dynamicRadius);
  }

  buildLines(numLines, dynamicRadius) {
    this.lines = [];
    for (let i = 0; i < numLines; i++) {
      let targetIndex = i % this.weaves.length;
      this.lines.push(new Line(this.weaves[targetIndex], 1, dynamicRadius));
    }
  }

  update(numLines, dynamicRadius) {
    // Rebuild only if number of lines changed
    if (numLines !== this.lines.length) {
      this.buildLines(numLines, dynamicRadius);
    }
  }

  updateRadius(dynamicRadius) {
    for (let l of this.lines) {
      l.radius = dynamicRadius;
    }
  }

  display() {
    for (let l of this.lines) {
      l.display();
    }
  }

  render() {
    this.display();
  }
}

class Line {
  constructor(targetWeave, speed, radius) {
    this.targetWeave = targetWeave;
    this.radius = radius;
    this.maxTrail = 400;
    this.noiseOffset = random(1000);

    const lineColors = [
      color(201, 85, 159),
      color(229, 37, 37),
      color(33, 144, 69),
      color(14, 76, 139),
      color(14, 40, 20),
      color(239, 120, 25)
    ];
    this.color = lineColors[floor(random(lineColors.length))];

    this.startAngle = random(360); // Keep a starting angle for consistency
  }

  display() {
    noFill();
    stroke(red(this.color), green(this.color), blue(this.color), 80);
    strokeWeight(3);

    beginShape();
    let angle = this.startAngle;
    for (let i = 0; i < this.maxTrail; i++) {
      let x = this.targetWeave.centreX + cos(angle) * this.radius;
      let y = this.targetWeave.centreY + sin(angle) * this.radius;
      vertex(x, y);
      angle += 1;
    }
    endShape();

    // Draw small circles along the line
    angle = this.startAngle;
    for (let i = 0; i < this.maxTrail; i += 8) {
      let x = this.targetWeave.centreX + cos(angle) * this.radius;
      let y = this.targetWeave.centreY + sin(angle) * this.radius;
      fill(red(this.color), green(this.color), blue(this.color), 255);
      noStroke();
      ellipse(x, y, 7, 7);
      angle += 8;
    }
  }
}