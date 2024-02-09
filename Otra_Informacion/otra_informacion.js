const drag = document.querySelector('.text');
const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');

let dra;

drag.addEventListener('dragstart', e =>{
    dra = e.target;
});

box.addEventListener('dragover', e =>{
    e.preventDefault();
}, false);

box.addEventListener('drop', e =>{
    e.preventDefault();
    e.target.appendChild(dra);
});

box2.addEventListener('dragover', e =>{
    e.preventDefault();
}, false);

box2.addEventListener('drop', e =>{
    e.preventDefault();
    e.target.appendChild(dra);
});