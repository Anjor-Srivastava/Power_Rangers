var canvas = new fabric.Canvas('myCanvas');

var block_y, block_x;

var block_image_width = 100;
var block_image_height = 200;

var block_image_object= "";

var red = 0;
var green = 0;
var yellow = 0;
var pink = 0;
var blue = 0;


function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);

		block_image_object.set({
			top:block_y,
			left:block_x
		});

		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
var keyPressed = e.keyCode;
console.log(keyPressed);
block_y = 1;
block_image_width = 300;
block_image_height = 430;
	if(keyPressed == '82')
	{
		block_x = 1;
		new_image("rr1.png");
		red++;
	}
	if(keyPressed == '71')
	{
		block_x = 250;
		new_image("gr.png")
		green++;
	}
	
	if(keyPressed == '89')
	{
		block_x = 400;
		new_image("yr.png")
		yellow++;
	}
	if(keyPressed == '80')
	{
		block_x = 700;
		new_image("pr.png");
		pink++
	}
	if(keyPressed == '66')
	{
		block_x = 750;
		new_image("br.png");
		blue++;
	}
	setTimeout(display_logo, 1000);
}

function display_logo() {
	if (red >= 1 && green >= 1 && yellow >= 1 && pink >= 1 && blue >= 1) {
		block_image_width = 100;
        block_image_height = 200;
		block_y = 400;
		block_x = 400;
		new_image("power-rangers-title.png");
	}
}

if (screen.width < 992) {
	document.getElementById("nan").style.display = "block";
} else {
	document.getElementById("avail").style.display = "block";
	document.body.style.backgroundImage = 'url("backg.jpg")';
}