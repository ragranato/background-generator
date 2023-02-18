var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

setGradient()
console.log(color1.value)
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
// function getRndInteger() {
//     return Math.floor(Math.random() * 256);
// }

var button = document.createElement("button");
var text = document.createTextNode("Random");
button.appendChild(text);
body.appendChild(button);

button.onclick = function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, " + "#" + randomColor + ", " + "#" + randomColor2 + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

