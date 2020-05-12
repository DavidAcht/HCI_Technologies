

// changing individual properties with code and using setInterval
var x = 0.01;
var rotationSpeed = Math.sin(x);
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;
	myOtherBox.object3D.scale.y -= rotationSpeed;
	console.log(rotationSpeed);
	x += 0.5;
	rotationSpeed = Math.sin(x) * 2;
}

setInterval(spin, 16); //equivalent to 60 fps