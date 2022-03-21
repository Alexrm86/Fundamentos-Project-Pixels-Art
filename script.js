let palettas = Array.from(document.getElementsByClassName('color'));
let pixelBoard = document.getElementById('pixel-board');
let pixelSize = 5;
let colorSelected = palettas[0];

function NumberFunc() {
    let Number = Math.floor(Math.random() * 255);
    return Number;
}

function Colors() {
    let red = NumberFunc();
    let green = NumberFunc();
    let blue = NumberFunc();
    let rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}