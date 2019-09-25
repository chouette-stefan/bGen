var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var HEXcode = document.querySelector(".hex");
const input1 = document.querySelector(".hex1");
const input2 = document.querySelector(".hex2");
const radial = document.querySelector(".radial");
const toRight = document.querySelector(".toRight");
const toLeft = document.querySelector(".toLeft");
const toTop = document.querySelector(".toTop");
const toBottom = document.querySelector(".toBottom");


function setGradient() {
    body.style.background = "radial-gradient(" + color1.value + ", " + color2.value + ")";
    body.style.backgroundAttachment = "fixed";
    input1.textContent = color1.value;
    input2.textContent = color2.value;
    HEXcode.textContent = "radial-gradient(" + color1.value + ", " + color2.value + ")";
}

// switch (expr) {
//     case: 'user clicked on radial':
//         // change the bg to radial
//         break;
//     case: 'user clicked on right arrow':
//         // change the bg to linear right
//         break;
//     case: 'user clicked on left arrow':
//         // change the bg to linear left
//         break;
//     case: 'user clicked on up arrow':
//         // change the bg to linear top
//         break;
//     case: 'user clicked on down arrow':
//         // change the bg to linear bottom
//         break;
//     default:
//     //can be linear right
// }

radial.addEventListener("click", function () {
    body.style.background = "radial-gradient(" + color1.value + ", " + color2.value + ")";
    body.style.backgroundAttachment = "fixed";
    HEXcode.textContent = "radial-gradient(" + color1.value + ", " + color2.value + ")";
});

toRight.addEventListener("click", function () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    body.style.backgroundAttachment = "fixed";
    HEXcode.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
});

toLeft.addEventListener("click", function () {
    body.style.background = "linear-gradient(to left, " + color1.value + ", " + color2.value + ")";
    body.style.backgroundAttachment = "fixed";
    HEXcode.textContent = "linear-gradient(to left, " + color1.value + ", " + color2.value + ")";
});

toTop.addEventListener("click", function () {
    body.style.background = "linear-gradient(to top, " + color1.value + ", " + color2.value + ")";
    body.style.backgroundAttachment = "fixed";
    HEXcode.textContent = "linear-gradient(to top, " + color1.value + ", " + color2.value + ")";
});

toBottom.addEventListener("click", function () {
    body.style.background = "linear-gradient(to bottom, " + color1.value + ", " + color2.value + ")";
    body.style.backgroundAttachment = "fixed";
    HEXcode.textContent = "linear-gradient(to bottom, " + color1.value + ", " + color2.value + ")";
});

color1.addEventListener("change", setGradient);

color2.addEventListener("change", setGradient);

// var rgbToHex = function (rgb) {
//     var hex = Number(rgb).toString(16);
//     if (hex.length < 2) {
//         hex = "0" + hex;
//     }
//     return hex;
// }

// var fullColorHex = function (r, g, b) {
//     var red = rgbToHex(r);
//     var green = rgbToHex(g);
//     var blue = rgbToHex(b);
//     return red + green + blue;
// }
