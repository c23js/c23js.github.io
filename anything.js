var canvas = document.getElementById("arena");
var ctx = canvas.getContext("2d");
canvas.width  = 1200;
canvas.height = 900;

var player = {
	x:560, y:840, size: 50
}

var door = {
	x:553, y:10, size: 65
}

window.addEventListener("keyup", function(event){ 
console.log(event);
if (event.key == "w")
{
	player.y -= 30 };

});
window.addEventListener("keyup", function(event){ 
console.log(event);
if (event.key == "a")
{
	player.x -= 30 };

});
window.addEventListener("keyup", function(event){ 
console.log(event);
if (event.key == "d")
{
	player.x += 30 };

});
window.addEventListener("keyup", function(event){ 
console.log(event);
if (event.key == "s")
{
	player.y += 30 };

});

function loop(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "blue";
ctx.fillRect(player.x, player.y, player.size, player.size);
ctx.fillRect(door.x, door.y, door.size, door.size);
window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
