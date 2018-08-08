var bird;
var pipes = [];
var score = 0;
var maxScore = 0;
var isOver = false;

function setup() {
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  if (frameCount % 140 == 0) {
  	pipes.push(new Pipe());
  }

  for(var i = pipes.length - 1; i >= 0; i--) {
  	pipes[i].show();
  	pipes[i].update();

  	if(pipes[i].pass(bird)) {
  		score += 1;
  	}

  	if(pipes[i].hits(bird)) {
  		gameover();
  	}

  	if(pipes[i].offscreen()){
  		pipes.splice[i,1];
  	}
  }

  bird.update();
  bird.show();
  showScores();
}

function showScores() {
  textSize(32);
  fill(170, 44, 160);
  text('score: ' + score, 5, 32);
  text('record: ' + maxScore, 5, 64);
}

function gameover() {
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(170, 44, 160);
  text('GAMEOVER', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  maxScore = max(score, maxScore);
  isOver = true;
  noLoop();
}

function reset() {
  isOver = false;
  score = 0;
  pipes = [];
  bird = new Bird();
  loop();
}

function keyPressed() {
	if (key === ' ') {
		bird.up();
		if (isOver) reset();
	}
}