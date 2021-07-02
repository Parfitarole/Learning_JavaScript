// console.dir(document)

title = document.getElementById('testid');
title.textContent = 'No this is the title';
title.style.borderBottom = '2px solid black';

elements = document.getElementsByClassName('list-item');

query = document.querySelector('pengting');

button = document.getElementById('button')
button.addEventListener('click', buttonClicked)

function buttonClicked(e) {
    console.log(e.target.id)
    alert('reeeee')
}
