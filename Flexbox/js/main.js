'use strict';

const btns = document.querySelectorAll('#buttons > button');

function handlerClick(event) {
    const flexArea = document.getElementById('flexArea');
    flexArea.style.flexDirection = event.target.dataset.buttontype;

    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
for (const btn of btns) {
    btn.addEventListener('click', handlerClick);
}
document.querySelector('#btnRowReverse').classList.add('active');