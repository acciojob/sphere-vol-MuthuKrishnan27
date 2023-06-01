function volume_sphere(event) {
    //Write your code here
		 let r = parseFloat(document.getElementById("radius").value);
		let volume = document.getElementById("volume");
		let result = (4 / 3) * Math.PI * Math.pow(r, 3);
		console.log(result);
		volume.value = result;
		event.preventDefault();
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
