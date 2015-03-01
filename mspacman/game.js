/* Mengtian Li
 * mli09
 * 2/28/2015
 * game.js
 */
function init(){
	var canvas = document.getElementById('game_canvas');
		var ctx = canvas.getContext('2d');
		var img = new Image();
		img.src = "pacman10-hp-sprite.png";
		img.onload = function(){
			ctx.drawImage(img,320,0,466,138,0,0,466,138);
			ctx.drawImage(img,82,23,15,15,6,9,15,15);
		}
}


