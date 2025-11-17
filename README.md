# IDEA1903_Group-A
IDEA1903 Group A - Creative Coding Major Project

## About the Artwork
For my indidual component of A2, I have focused on the User Input functionality as the core interaction. 
This artwork builds upon the sense of movement established in the group component, introducing a significant shift in approach. The motion is now user-driven rather than automated. 
By placing control in the hands of the viewer, the composition transforms from a passive visual experience into an interactive one. 
Users can influence the rhythm, flow and visual dynamics through slider adjustments, creating a personalised interpretation of the artwork. 

Through a set of sliders, users are able to manipulate the key visual elements such as background colour, line dynamics and size at their own ease.
This interaction transforms the piece into a dynamic, customisable experience. Each adjustment influences the harmony and flow and allows users to craft their own interpretation of the artwork.

## How to Interact

The controls are located in the Artwork Controls panel on the left side.

- **Background Colour:** Adjust the brightness and contrast of the background colours.
- **Background Circles Zoom:** Change the spacing between circular elements in the flow field creating a zoom in and out.
- **Outside Lines Movement:** Alters the colour intensity of the lines and moves them from left to right.
- **Outside Lines Zoom:** Controls the size of the outside lines around the weaves.
- **Weave Colour:** Adjusts the colour saturation of the circular weaves.
- **Download Image:** Downloads a PNG file of your created artwork.

## Artowrk implementation

- preload()
 - Pre loads the image of the fabric.

- setup()
  - createCanvas(): Creates the drawing area.
  - createSliders(): Adds interactive controls (RGB sliders, weave color, zoom, etc.).
  - drawWeaves(): Populates the weaves array with weave objects.
  - lineSystem: Handles animated lines around the artwork.
 
- draw()
  - Updates background color from RGB sliders.
  - Adjusts weave spacing and line system dynamically.
  - Draws flow field and weave layers.
 
- createSliders() (in sliders.js)
  - **Background colour:** Adjusts the brightness and contrast of the underlying image
  - **Background circles zoom:** Changes the size of the circles from smaller to larger
  - **Outside lines movement:** Alters the colour intensity of the lines and moves them from left to right
  - **Outside lines zoom:** Controls the size of the lines around the weaves
  - **Weave colour:** Adjusts the colour saturation of the circular weaves

- saveArtwork()
  - Saves the current canvas as a PNG file when the user clicks the button using p5. built in saveCanvas function


### References & Inspiration

https://www.youtube.com/watch?v=onemNhgAVg8 by The Coding Train
https://editor.p5js.org/StevesMakerspace/sketches/dZTck1-WU
https://editor.p5js.org/StevesMakerspace/sketches/8XEPUNSQ-
