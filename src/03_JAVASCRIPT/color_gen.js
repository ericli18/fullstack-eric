const colors = document.querySelectorAll("li")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    console.log('button pressed')
    colors.forEach((col) => {
        [r, g, b] = genRandomColor()
        col.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
})

function genRandomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return [r, g, b]
}