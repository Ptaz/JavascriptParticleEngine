ParticleEngine = function() {
	var engine = this;
	var i;
	this.MAX_PARTICLES = 5000;
	this.particles = [];
	this.start = 0;
	this.end = 0;
	this.gravityWell = new GravityWell({x: 400, y: 240}, engine);
	for(i = 0; i < this.MAX_PARTICLES; i++)
	{
		this.particles[i] = new Particle();
	}
}

ParticleEngine.prototype.emitParticles = function(particlesEmit, mousePosition) {
	var i;
	for(i = 0; i < particlesEmit; i++)
	{
		this.particles[this.end].setParticle({x: mousePosition.x, y: mousePosition.y});
		this.end++;
		if(this.end >= this.MAX_PARTICLES)
		{
			this.end = 0;
		}
		if(this.end === this.start)
		{
			this.start++;
			if(this.start >= this.MAX_PARTICLES)
			{
				this.start = 0;
			}
		}
	}
}

ParticleEngine.prototype.update = function(timestep, mousePosition){
	var i;
	this.gravityWell.update(timestep, mousePosition);
	if(this.start === this.end)
	{
		return;
	}
	if(this.particles[this.start].active() === false)
	{
		while(this.particles[this.start].active() === false)
		{
			this.start++;
			if(this.start >= this.MAX_PARTICLES)
			{
				this.start = 0;
			}
			if(this.start === this.end)
			{
				return;
			}
		}
	}
	if(this.end < this.start)
	{
		for(i = this.start; i < this.MAX_PARTICLES; i++)
		{
			this.particles[i].update(timestep);
		}
		for(i = 0; i < this.end; i++)
		{
			this.particles[i].update(timestep);
		}
	}
	else
	{
		for(i = this.start; i < this.end; i++)
		{
			this.particles[i].update(timestep);
		}
	}
}

ParticleEngine.prototype.render = function(timestep, ctx, mouseposition){
	ctx.save();
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect (0, 0, 800, 480);
	ctx.globalCompositeOperation = "lighter";
	if(this.end < this.start)
	{
		for(i = this.start; i < this.MAX_PARTICLES; i++)
		{
			this.particles[i].render(timestep,ctx);
		}
		for(i = 0; i < this.end; i++)
		{
			this.particles[i].render(timestep,ctx);
		}
	}
	else
	{
		for(i = this.start; i < this.end; i++)
		{
			this.particles[i].render(timestep,ctx);
		}
	}
	
	//Creates circle pointer where mouse position is on canvas
	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.arc(mouseposition.x, mouseposition.y, 4, 0, Math.PI*2);
	ctx.fill();
	ctx.restore();
}