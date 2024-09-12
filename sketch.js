let circleSize, halfSize;
let circles = [];
let repelDist;
let canvas;
let makeBig = false;
let homePageOn = true;

function preload(){


}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  colorMode(HSB);

  //REF HTML
  // let mainimage =select("#main-image");
  // let headertwo = select("#header-two");

  // .mainimagemousePressed(() => {
  //   if (makeBig) {
  //     mainimage.style('width', "100%");
  //   } else {
  //     mainimage.style('width', "30%");
  //   }
  // });

  // headertwo.mouseOver(() => {
  //   headertwo.style('font-size', '10vh');
  //   headertwo.style(`color: #FF0000`);
  // });

  // headertwo.mouseOut(() => {
  //   headertwo.style('font-size', '5vh');
  //   headertwo.style(`color: #000000`);
  // });

  // circleSize = height * 0.1; // Adjusted size for a better grid
  // halfSize = circleSize / 2;
  // repelDist = circleSize * 2; // Distance for repulsion effect

  noStroke();


  // // Initialize circles array with their positions
  // for (let x = halfSize; x <= width; x += circleSize) {
  //   for (let y = halfSize; y <= height - halfSize; y += circleSize) {
  //     circles.push({ x: x, y: y, originalX: x, originalY: y });
  //   }
  // }

  //mouseX = -width / 2;
 // mouseY = -height / 2;
}

function draw() {

  if(!homePageOn){
  //   background(255, 0.08);


  // let c = color(200, 10, 100);
  // let r = color(0, 10, 100);

  // let fillR = lerpColor(c, r, 0.1);

  // for (let i = 0; i < circles.length; i++) {
  //   let circle = circles[i];

  //   // Calculate the distance between the mouse and the circle
  //   let d = dist(mouseX, mouseY, circle.x, circle.y);

  //   // Apply repulsion force if within repelDist
  //   if (d < repelDist) {
  //     let angle = atan2(circle.y - mouseY, circle.x - mouseX);
  //     circle.x += cos(angle) * (repelDist - d) * 0.05;
  //     circle.y += sin(angle) * (repelDist - d) * 0.05;
  //     fill(fillR);
  //   } else {
  //     // Return to original position if not repelled
  //     circle.x = lerp(circle.x, circle.originalX, 0.05);
  //     circle.y = lerp(circle.y, circle.originalY, 0.05);
  //     fill(c);
  //   }

  //   // Draw the circle
  //   circleShape(circle.x, circle.y, circleSize);
  // }
}

  if(homePageOn){
    homePage();
  }
}

function circleShape(x, y, size) {
  circle(x, y, size);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);

    // Initialize circles array with their positions
    for (let x = halfSize; x <= width; x += circleSize) {
      for (let y = halfSize; y <= height - halfSize; y += circleSize + halfSize) {
        circles.push({ x: x, y: y, originalX: x, originalY: y });
      }
    }

    mouseX = -width / 2;
    mouseY = -height / 2;



}

function homePage(){

  background(50);
  rectMode(CENTER);
  let rectW = width*0.9;
  let rectH = height*0.9; 
  rect(width/2, height/2, rectW, rectH);
  fill(255);

}

function pageTwo(){
  //create boolean for each page 
  if (pageTwoShow == buttonPressed){//display new page

  }
}