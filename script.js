var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor1 = document.querySelector(".generateColor1");
var randomColor2 = document.querySelector(".generateColor2");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setGradient);


randomColor1.addEventListener("click", pickColor1);

randomColor2.addEventListener("click", pickColor2);


function pickColor1() {
  color1.value = "#" + Math.floor(Math.random()*16777216).toString(16);
  setGradient();
}


function pickColor2() {
  color2.value = "#" + Math.floor(Math.random()*16777216).toString(16);
  setGradient();
}
