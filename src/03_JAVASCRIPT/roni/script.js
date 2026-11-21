let button = document.getElementById("b1");

button.addEventListener("click", func);

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function func() {
    document.getElementById("color1").style.backgroundColor = `rgb(${rand(0, 255)},${rand(0, 255)}, ${rand(0, 255)})`;
    document.getElementById("color2").style.backgroundColor = `rgb(${rand(0, 255)},${rand(0, 255)}, ${rand(0, 255)})`;
    document.getElementById("color3").style.backgroundColor = `rgb(${rand(0, 255)},${rand(0, 255)}, ${rand(0, 255)})`;
    document.getElementById("color4").style.backgroundColor = `rgb(${rand(0, 255)},${rand(0, 255)}, ${rand(0, 255)})`;
    document.getElementById("color5").style.backgroundColor = `rgb(${rand(0, 255)},${rand(0, 255)}, ${rand(0, 255)})`;
}
