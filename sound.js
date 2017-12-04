function Sound()
{
	this.ws = new Audio();
	this.ws.src = "assets/steps.mp3"
	this.ws.loop = true;
	this.ws.volume = 0;
	this.ws.play();
}

Sound.prototype.play = function()
{
	if(walking == true)
		this.ws.volume = 1;
	else
		this.ws.volume = 0;
}
