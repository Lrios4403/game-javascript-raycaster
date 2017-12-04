var display = document.getElementById('display');
var player = new Player(15,30, Math.PI * 0.3);
var map = new Map(32);
var controls = new Controls();
var camera = new Camera(display, 160, 0.5);
var loop = new GameLoop();
var sound = new Sound();
var walking = false;

//map.randomize();

loop.start(function frame(seconds) {
	map.update(seconds);
	player.update(controls.states, map, seconds);
	camera.render(player, map);
	sound.play();
});