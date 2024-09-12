
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
  noStroke();


}

function draw() {
  fill(13,30, 88);
  rect(width/2, height/2, width, height);

  fill(100, 4, 20);
  rect(-484, 112, 910, 60);
  if(homePageOn){
    homePage();
  }
}


function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);


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
  if (homePageShow && buttonPressed){//display new page

  }
}