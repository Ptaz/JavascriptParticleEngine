Particle = function() {
  this.position = {
    x: 0,
    y: 0
  }
  
  this.lifetime = 0;
  this.isAlive = false;
  this.size = 1;
  
  this.velocity = {
	x: 0,
	y:0
  }
  
}

Particle.prototype.setParticle = function(initialPosition) {
	this.position = initialPosition;
	this.velocity.x = (Math.random()-.5)*0.4;
	this.velocity.y = (Math.random()-.5)*0.4;
	this.isAlive = true;
	this.lifetime = 10000;
}

Particle.prototype.active = function() {
	return this.isAlive;
}

Particle.prototype.update = function(timeStep){
	this.position.y += this.velocity.y * timeStep;
	this.position.x += this.velocity.x * timeStep;
	this.lifetime -= timeStep;
	if(this.lifetime <= 0)
	{
		this.isAlive = false;
	}
}

Particle.prototype.render = function(timeStep, ctx) {
	ctx.save();
	ctx.fillStyle = "rgba(0,200,200,0.8)";
	ctx.fillRect (this.position.x, this.position.y, this.size, this.size);
	
	ctx.restore();
}
