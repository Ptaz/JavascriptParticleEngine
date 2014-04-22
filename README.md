JavascriptParticleEngine
========================

A simple particle engine in Javascript. Creates a circular array of particles and updates their position and velocity
based on where the gravity is coming from. 

Started as a simple project to help me learn javascript more effectively. 
Works best in Google Chrome on a windows computer. Framerates start to drop once the system reaches 10,000 particles.

Feel free to use the code as a resource for understanding the basics behind particles, particle engines, and even 2D 
animation in an online environment.

Useful values to changes include: MAX_PARTICLES (in particle_engine.js), lifetime (in particle.js), the gravity well's 
position (in gravity_well.js), or the rgb values for the particles color (in particle.js render method).
