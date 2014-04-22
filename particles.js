Game = function() {
  // The game clock & canvas
  var clock = 0;
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");  
  var backCanvas = document.createElement("canvas");
  backCanvas.width = canvas.width;
  backCanvas.height = canvas.height;
  backCtx = canvas.getContext("2d");
  //FPS counter:
  this.fpsTimer = 0;
  var mousePosition = {x: 0, y: 0};
  var mouseDown = false;
  var particleEngine = new ParticleEngine();
  

  
  canvas.addEventListener( 'mousemove', function(event) {
	var rect = canvas.getBoundingClientRect();
	mousePosition.x = event.clientX - rect.left;
	mousePosition.y = event.clientY - rect.top;
  });
  
  canvas.addEventListener( 'mousedown', function(event) {
	mouseDown = true;
  });
  
  canvas.addEventListener( 'mouseup', function(event) {
	mouseDown = false;
  });
  
    // Game Loop
  function gameLoop(time) {
	var i;
    var timeStep = time - clock;
    clock = time;
	
	if(mouseDown === true)
	{
		particleEngine.emitParticles(50, mousePosition);
	}
	
	particleEngine.update(timeStep, mousePosition);
	
    // Render the game
    backCtx.clearRect(0,0, 800, 480);
    particleEngine.render(timeStep, backCtx, mousePosition);
    ctx.drawImage(backCanvas, 0, 0);
    
	this.fpsTimer -= time;
	if (this.fpsTimer <= 0) {
		this.fpsTimer = 100;
		document.getElementById("fps").innerHTML = (Math.floor(1 / (timeStep / 1000)).toString() + " FPS").toString();
	}
	
    // Loop by requesting the next animation frame
    window.requestAnimationFrame(gameLoop);
  }
  
  // Initialize the game
  
  
  // Start the game loop
  gameLoop(0);
  
  
}();