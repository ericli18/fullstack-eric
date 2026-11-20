const hex_set = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function generate_random_hex(){
    return hex_set[Math.floor(Math.random() * hex_set.length)];
}

function generate_random_hex_code(){
    let hex_code = "#";
    for (let i = 0; i < 6; ++i){
        hex_code += generate_random_hex();
    }
    return hex_code;
}


function replace(){
    const color_blocks = document.querySelectorAll(".color-block");
    for (let color_block of color_blocks){
        const generated_color = generate_random_hex_code();
        color_block.style.backgroundColor = generated_color;
        color_block.ariaLabel = "Background color is: " + generated_color;
    }
}

const generate_button = document.querySelector("button")

generate_button.addEventListener("click", () => {
    replace();
})

