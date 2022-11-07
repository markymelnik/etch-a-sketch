
const container = document.querySelector('.container');


function getGrid(dimension) {
    container.style.gridTemplateColumns = `repeat(${dimension}, auto)`;
    for (let i = 1; i <= (dimension * dimension); i++) {
        const etchBox = document.createElement('div');
        etchBox.classList.add('etchBox');
        container.appendChild(etchBox);
    }
};

getGrid(16);