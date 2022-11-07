
window.onload = function() {
    let count = 16,
    etchGrid = document.getElementById('container'),
    etchBox,
    etchFragment = document.createDocumentFragment();

    for (let i = 1; i <= count; i++) {
        for (let j = 1; j <= count; j++) {
            etchBox = document.createElement('div');
            etchBox.id = 'etchBox';
            etchFragment.appendChild(etchBox);
        }
    }
    etchGrid.appendChild(etchFragment);
}

