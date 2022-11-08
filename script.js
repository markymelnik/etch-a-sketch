// Etch-A-Sketch

const etchContainer = document.querySelector('.etchContainer');
const resetButton = document.querySelector('.resetButton');
const colorChoice = document.querySelector('#colorSlider');

window.onload = getGrid(16);

const etchBox = document.querySelectorAll('.etchBox');

let isMouseClicked = false;

etchBox.forEach(box => {
    box.addEventListener('mousedown', () => {
        isMouseClicked = true;
    })
});

etchBox.forEach(box => {
    box.addEventListener('mouseup', () => {
        isMouseClicked = false;
    })
});

etchBox.forEach(box => {
    box.addEventListener('mouseover', () => {
        if (isMouseClicked == true) {
            box.style.background = colorChoice.value;
        }
    })
});

resetButton.addEventListener('click', () => {
    etchBox.forEach(box => {
        box.style.background = 'white';
    })
});

function getGrid(dimension) {
    etchContainer.style.gridTemplateColumns = `repeat(${dimension}, auto)`;
    for (let i = 1; i <= (dimension * dimension); i++) {
        const etchBox = document.createElement('div');
        etchBox.classList.add('etchBox');
        etchContainer.appendChild(etchBox);
    }
};