
let title;

function createSliders() {
  const sidebar = createDiv();
  sidebar.position(20, 10); // Sidebar position
  sidebar.style('background', 'rgba(0, 0, 0, 0.25)');
  sidebar.style('border-radius', '10px');
  sidebar.style('padding', '15px');
  sidebar.style('color', 'white');


  // Title
  title = createP('Artwork Controls').parent(sidebar);
  title.style('font-size', '24px'); // Bigger font
  title.style('font-weight', 'bold');
  title.style('margin-bottom', '10px');
  title.style('border-bottom', '1px solid #ccc');
  title.style('padding-bottom', '5px');
  title.style('color', 'white');


  // Sliders
  createP('Background Colour').parent(sidebar);
  colorSlider = createSlider(0, 255, 255).parent(sidebar);

  createP('Background Circles Zoom').parent(sidebar);
  spacingSlider = createSlider(1, 20, 12).parent(sidebar);

  createP('Outside Lines Movement').parent(sidebar);
  numLinesSlider = createSlider(10, 200, 50).parent(sidebar);

  createP('Outside Lines Zoom').parent(sidebar);
  radiusSlider = createSlider(20, 300, 100).parent(sidebar);

  createP('Weave Colour').parent(sidebar);
  weaveColorSlider = createSlider(0, 255, 165).parent(sidebar);
}
