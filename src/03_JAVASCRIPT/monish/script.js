const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("Button clicked");
    const colors = document.querySelectorAll(".color")
    console.log(colors)

    colors.forEach(function (color){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        console.log(red)
        console.log(green)
        console.log(blue)

        color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
});

