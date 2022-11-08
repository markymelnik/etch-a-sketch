// Etch-A-Sketch

const etchContainer = document.querySelector('.etchContainer');
const resetButton = document.querySelector('.resetButton');
const colorChoice = document.querySelector('#colorSlider');
const sizeSlider = document.querySelector('#sizeSlider');

window.onload = getGrid(40);

const etchBox = document.querySelectorAll('.etchBox');

let isMouseClicked = false;

etchBox.forEach(box => {
    box.addEventListener('mousedown', () => {
        isMouseClicked = true;
        box.style.background = colorChoice.value;
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

sizeSlider.addEventListener('change', () => {
    let dimension = sizeSlider.value;
    etchContainer.innerHTML = '';
    getGrid(dimension);
    const etchBox = document.querySelectorAll('.etchBox');
    etchBox.forEach(box => {
        box.addEventListener('mousedown', () => {
            isMouseClicked = true;
            box.style.background = colorChoice.value;
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
});

function getGrid(dimension) {
    etchContainer.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    etchContainer.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    for (let i = 1; i <= (dimension * dimension); i++) {
        let etchBox = document.createElement('div');
        etchBox.classList.add('etchBox');
        etchContainer.appendChild(etchBox);
    }
};