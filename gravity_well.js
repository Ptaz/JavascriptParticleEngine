GravityWell = function(initialPosition, newparticleEngine) {
	this.position = {
		x: initialPosition.x,
		y: initialPosition.y
	}
	
	this.particleEngine = newparticleEngine;
	
	this.pull = 0.001;

}

GravityWell.prototype.update = function(timeStep, mousePos) {
	this.position = mousePos;
	var i = 0;
	if(this.particleEngine.end < this.particleEngine.start)
	{
		for(i = this.particleEngine.start; i < this.particleEngine.MAX_PARTICLES; i++)
		{
			var p = this.particleEngine.particles[i];
			//var distance_squared = Math.pow((this.position.x - p.position.x),2) + Math.pow((this.position.y - p.position.y),2);
			var theta = Math.atan2((p.position.y-this.position.y), (p.position.x-this.position.x));
			p.velocity.y -= (this.pull*Math.sin(theta)*timeStep);
			p.velocity.x -= (this.pull*Math.cos(theta)*timeStep);
		}
		for(i = 0; i < this.particleEngine.end; i++)
		{
			var p = this.particleEngine.particles[i];
			//var distance_squared = Math.pow((this.position.x - p.position.x),2) + Math.pow((this.position.y - p.position.y),2);
			var theta = Math.atan2((p.position.y-this.position.y), (p.position.x-this.position.x));
			p.velocity.y -= (this.pull*Math.sin(theta)*timeStep);
			p.velocity.x -= (this.pull*Math.cos(theta)*timeStep);
		}
	}
	else
	{
		for(i = this.particleEngine.start; i < this.particleEngine.end; i++)
		{
			var p = this.particleEngine.particles[i];
			//var distance_squared = Math.pow((this.position.x - p.position.x),2) + Math.pow((this.position.y - p.position.y),2);
			var theta = Math.atan2((p.position.y-this.position.y), (p.position.x-this.position.x));
			p.velocity.y -= (this.pull*Math.sin(theta)*timeStep);
			p.velocity.x -= (this.pull*Math.cos(theta)*timeStep);
		}
	}
}