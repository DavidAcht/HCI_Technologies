

// changing individual properties with code and using setInterval
var x = 0.01;
var rotationSpeed = Math.sin(x);
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;
	console.log(rotationspeed);
	x += 0.5;
	rotationSpeed = Math.sin(x);
}

setInterval(spin, 16); //equivalent to 60 fps