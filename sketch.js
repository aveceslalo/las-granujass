/*
 *
 * Cinema Expandido Web
 * Final
 * Lalo:
 * 
 *
 * URL TEST: hec.local:
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */
var value = 0;

var video1;
var video2;
var video3;
var video4;
var celular = true;

/*
 *****************************************
 *****************************************
 *LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  checkdevice();
}

function preload() {
  pre = loadImage("assets/videos/rrr.gif");
  initializeVideo1();
  initializeVideo2();
  initializeVideo3();

  initializeVideo4();

}

function setup() {
  createCanvas(1080, 1920);
  checkdevice();


}

function draw() {
  checkdevice();
  print(value);
  image(pre, width / 2, height / 2);


  if (celular == true) {
    if (value <= 100) {

      drawVideo1();

    }
    if (value > 100 && value <= 200) {
      drawVideo2();

    } else if (value >= 300) {

      drawVideo3();
    }
  } else {
    drawVideo4();

  }

}

/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */

function deviceMoved() {
  value = value + 100;
  if (value >= 400) {
    value = 0;
  }
}

function mousePressed() {
  value = value + 100;
  if (value >= 400) {
    value = 0;
  }
}

function initializeVideo1() {

  video1 = createVideo("assets/videos/1.mp4");
  video1.loop();
  video1.hide();
}

function initializeVideo2() {

  video2 = createVideo("assets/videos/2.mp4");
  video2.loop();
  video2.hide();
}

function initializeVideo3() {

  video3 = createVideo("assets/videos/3.mp4");
  video3.loop();
  video3.hide();
}

function initializeVideo4() {

  video4 = createVideo("assets/videos/4.mp4");
  video4.loop();
  video4.hide();
}

function drawVideo1() {

  print("drawVideo1");

  var correctionX = (windowWidth / 2) - video1.width / 2;
  var correctionY = (windowHeight / 2) - video1.height / 2;

  image(video1, correctionX, correctionY);
}

function drawVideo2() {
  print("drawVideo2");
  var correctionX = (windowWidth / 2) - video2.width / 2;
  var correctionY = (windowHeight / 2) - video2.height / 2;
  image(video2, correctionX, correctionY);
}


function drawVideo3() {
  print("drawVideo3");
  var correctionX = (windowWidth / 2) - video3.width / 2;
  var correctionY = (windowHeight / 2) - video3.height / 2;

  image(video3, correctionX, correctionY);
}

function drawVideo4() {
  print("drawVideo4");
  var correctionX = (windowWidth / 2) - video4.width / 2;
  var correctionY = (windowHeight / 2) - video4.height / 2;

  image(video4, correctionX, correctionY);

}


function checkdevice() {
  if (windowWidth < 480) {
    print("soy celular");
    celular = true;
  } else {
    print("soy compu");
    celular = false;
  }
}