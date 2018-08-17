var particles = [];
const windchime = new Windchime();

var rotX, rotY, rotZ;
var xpos, ypos;

var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // default values
  gamma = 0;
}

function mousePressed() {
  particles.push(new Particle(0, 0));
  windchime.soundNewUser();
  windchime.soundWikiChange();
  if (particles.length > 1000) {
    particles.splice(0, 1);
  }
}

function draw() {
  background("#fffff8");

  rotateX(radians(rotX));
  rotateY(radians(rotY));
  rotateZ(radians(rotZ));

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

// accelerometer
window.addEventListener('deviceorientation', function (e) {
  rotX = e.alpha;
  rotY = e.beta;
  rotZ = e.gamma;
});