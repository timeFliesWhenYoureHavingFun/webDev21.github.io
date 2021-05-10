//setup function runs only once
function setup() {
       createCanvas(windowWidth, windowHeight);
    }
//runs over and over again until we close the browser
function draw() {
  //if statement evaluates whatever is in the parenthesis and if it's true
  //it will execute the code in the curly braces
  //windowResized();
  if (mouseIsPressed){
    fill(mouseX, 255, 0, 0.5);
    ellipse(mouseX, mouseY, 40, 40);
  }else{

  }

  }
//The windowResized() function is called once every time the browser window is resized.
//This is a good place to resize the canvas or do any other adjustments to accommodate
//the new window size.
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
