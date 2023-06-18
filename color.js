const button_color = document.querySelector('.button_color')
const span_color = document.querySelector('.color-h1')

button_color.onclick = () => {
    let color = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let array = ["#"];
    for(let i = 0 ; i < 6 ; i++) {
        let random_color = color[Math.floor(Math.random() * color.length)]
        array.push(random_color)
        console.log(array)
    }

    document.body.style.backgroundColor = array.join("");
    span_color.innerHTML = array.join("");
    button_color.style.backgroundColor = array.join("")
}