const palettas = Array.from(document.getElementsByClassName('color'));
const pixelBoard = document.getElementById('pixel-board');
let pixelSize = 5;
let colorSelected = palettas[0];

function randomNumberFunc() {
    const randomNumber = Math.floor(Math.random() * 255);
    return randomNumber;
}

function randomColors() {
    const red = randomNumberFunc();
    const green = randomNumberFunc();
    const blue = randomNumberFunc();
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}

function createpalettas() {
    for (let index = 1; index < palettas.length; index += 1) {
        palettas[index].style.backgroundColor = randomColors();
    }
}

function defineSizeOfPixelBoard(pixels) {
    const tamanhoBoard = 42 * pixels;
    pixelBoard.style.width = `${tamanhoBoard}px`;
    pixelBoard.style.height = `${tamanhoBoard}px`;
}

function createPixels(num) {
    defineSizeOfPixelBoard(num);
    const pixelCount = num ** 2;
    for (let index = 0; index < pixelCount; index += 1) {
        const div = document.createElement('div');
        div.className = 'pixel';
        div.style.width = '40px';
        div.style.height = '40px';
        div.style.border = '1px solid black';
        div.style.backgroundColor = 'white';
        pixelBoard.appendChild(div);
    }
}

function selectColor() {
    palettas.forEach((color) => {
        color.addEventListener('click', (event) => {
            colorSelected.classList.remove('selected');
            event.target.classList.add('selected');
            colorSelected = event.target;
        });
    });
}

function clickPaint() {
    const allPixels = Array.from(document.getElementsByClassName('pixel'));
    allPixels.forEach((pixel) => {
        pixel.addEventListener('click', (event) => {
            const pixelForPaint = event;
            pixelForPaint.target.style.backgroundColor = colorSelected.style.backgroundColor;
        });
    });
}

function newBoard() {
    let boardChild = pixelBoard.lastElementChild;
    while (boardChild) {
        pixelBoard.removeChild(boardChild);
        boardChild = pixelBoard.lastElementChild;
    }
    createPixels(pixelSize);
    selectColor();
    clickPaint();
}

function clearBoard() {
    const clearButton = document.getElementById('clear-board');
    clearButton.addEventListener('click', newBoard);
}

function catchBoardSize() {
    const input = document.getElementById('board-size');
    if (input.value === '') {
        return alert('Board inválido!');
    }
    return input.value;
}

function inputValueFunc() {
    const inputValue = catchBoardSize();
    if (inputValue < 5) {
        pixelSize = 5;
    } else if (inputValue > 50) {
        pixelSize = 50;
    } else {
        pixelSize = inputValue;
    }
}

function changeBoard() {
    const button = document.getElementById('generate-board');
    button.addEventListener('click', () => {
        inputValueFunc();
        newBoard();
    });
}

window.onload = () => {
    createpalettas();
    createPixels(pixelSize);
    selectColor();
    clickPaint();
    clearBoard();
    changeBoard();
};