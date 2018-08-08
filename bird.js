function Bird() {
	this.y = height/2;
	this.x = 64;
	this.radius = 32;

	this.gravity = 0.25;
	this.lift = -7;
	this.velocity = 0;

	this.show = function() {
		fill(244,223,66);
		ellipse(this.x, this.y, this.radius, this.radius);
	}

	this.up = function() {
		this.velocity = this.lift;
	}

	this.update = function() {
		this.velocity += this.gravity; 
		this.y += this.velocity;

		if (this.y > height) {
			this.y = height;
			this.velocity = 0; 
		}
		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0; 
		}

	}
}