const pixelRow = document.getElementById('pixel-board');



function getRandomRgb() {
    const r = Math.ceil((Math.random()) * 255);
    const g = Math.ceil((Math.random()) * 255);
    const b = Math.ceil((Math.random()) * 255);
    return `rgb(${r}, ${g}, ${b})`;
    //     https://stackoverflow.com/questions/10929458/sass-converting-hex-to-rgba-for-background-opacity/10939797#10939797
    // 
}

for (let i = 0; i < 10; i += 1) {
    console.log(getRandomRgb());
}

function colorPallet() {
    const paletteColor = document.getElementsByClassName('color');
    paletteColor[0].style.backgroundColor = 'black';
    paletteColor[0].classList.add('selected');
    paletteColor[1].style.backgroundColor = getRandomRgb();
    paletteColor[2].style.backgroundColor = getRandomRgb();
    paletteColor[3].style.backgroundColor = getRandomRgb();
}
colorPallet();

function createSquare(setNumber) {
    for (let index = 0; index < setNumber; index += 1) {
        const row = document.createElement('div');
        row.className = 'row';
        pixelRow.appendChild(row);
        for (let indexPix = 0; indexPix < setNumber; indexPix += 1) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            row.appendChild(pixel);
            // https://stackoverflow.com/questions/33679875/whats-the-meaning-of-the-row-class-in-bootstrap-its-difference-from-containe
        }
    }
}
createSquare(5);

function buttonInput() {
    const myButton = document.getElementById('generate-board');
    myButton.addEventListener('click', () => {
        const myValue = document.getElementById('board-size');
        pixelRow.innerHTML = '';
        if (myValue.value <= 0) {
            alert('Board inválido!');
        } else if (myValue.value < 5) {
            myValue.value = 5;
        } else if (myValue.value > 50) {
            myValue.value = 50;
        }
        createSquare(myValue.value);
    });
}
buttonInput();

function clickSelectedColor() {
    const colorSelected = document.getElementById('color-palette');
    colorSelected.addEventListener('click', (event) => {
        const myEvent = event.target;
        const divColor = document.querySelectorAll('.color');
        for (let index = 0; index < divColor.length; index += 1) {
            divColor[index].classList.remove('selected');
            if (myEvent.className === 'color') {
                myEvent.classList.add('selected');
            }
        }
    });
}
clickSelectedColor();

function paintPixel() {
    const bodyTableColor = document.getElementById('pixel-board');
    bodyTableColor.addEventListener('click', (e) => {
        const myNewEvent = e.target;
        const newDivs = document.querySelector('.selected');
        console.log(myNewEvent);
        if (myNewEvent.className === 'pixel') {
            myNewEvent.style.backgroundColor = newDivs.style.backgroundColor;
        }
    });
}
paintPixel();

function buttonCleanSquare() {
    const bodyTableColor = document.querySelectorAll('.pixel');
    for (let index = 0; index < bodyTableColor.length; index += 1) {
        bodyTableColor[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
}
const button = document.getElementById('clear-board');
button.addEventListener('click', buttonCleanSquare);