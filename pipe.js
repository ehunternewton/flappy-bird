function Pipe() {
	this.spacing = 150;
	this.top = random(height/8, height * 4 / 6);
	this.bottom = this.top + this.spacing;

	this.x = width;
	this.w = 64;
	this.speed = 2;

	this.passed = false;
	this.highlight = false;

	this.hits = function(bird) {
		var halfBird = bird.radius/2 - 1;
		if(bird.y-halfBird < this.top && bird.x > this.x && bird.x < this.x + this.w || 
			bird.y+halfBird > this.bottom && bird.x > this.x && bird.x < this.x + this.w) {
				this.highlight = true;
				return true;
		}
		return false;
	}

	this.pass = function(bird) {
		if(bird.x > this.x && !this.passed) {
			this.passed = true;
			return true;
		}
		return false; 
	}

	this.show = function() {
		fill(66,244,104);
		if (this.highlight) {
			fill(255, 0, 0);
		}
		rect(this.x, 0, this.w, this.top);
		rect(this.x, this.bottom, this.w, height);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.offscreen = function() {
		return(this.x < -this.w);
	}

}