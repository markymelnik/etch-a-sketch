let container = document.getElementById('container');
container.innerHTML = "container";

let smallBox = document.createElement('div');
smallBox.id = 'smallBox';
smallBox.innerHTML = "box";

container.appendChild(smallBox);

