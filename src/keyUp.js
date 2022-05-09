export default function keyUp(e) {
    const keys = document.querySelectorAll('.key');
    const firstLine = document.querySelectorAll('.lower');
    const leftShift = document.querySelector('.left-shift');
    const rightShift = document.querySelector('.right-shift');
    const controlLeft = document.querySelector('.ctrl-left');
    const controlRight = document.querySelector('.ctrl-right');
    const win = document.querySelector('.win');
    const altLeft = document.querySelector('.alt-left');
    const altRight = document.querySelector('.alt-right');
    const enter = document.querySelector('.enter');
    const del = document.querySelector('.del');
    const backspace = document.querySelector('.backspace');
    const tab = document.querySelector('.tab');
    const space = document.querySelector('.space');
    const arrUp = document.querySelector('.arr-up');
    const arrDown = document.querySelector('.arr-down');
    const arrLeft = document.querySelector('.arr-left');
    const arrRight = document.querySelector('.arr-right');
    for(let i = 0; i < firstLine.length; i++) {
        if(e.key === firstLine[i].innerHTML) {
            animate(keys, i);
        };     
    };
    for (let i = 0; i < keys.length; i++) {
        if(e.code === 'ShiftLeft'){
            animateFunc(leftShift);
        }
        if(e.code === 'ShiftRight'){
            animateFunc(rightShift)
        }
        if(e.code === 'ControlLeft'){
            animateFunc(controlLeft);
        }
        if(e.code === 'ControlRight'){
            animateFunc(controlRight);
        }
        if(e.code === 'MetaLeft'){
            animateFunc(win);
        }
        if(e.code === 'AltLeft'){
            animateFunc(altLeft);
        }
        if(e.code === 'AltRight'){
            animateFunc(altRight);
        }
        if(e.code === 'Enter'){
            animateFunc(enter);
        }
        if(e.code === 'Delete'){
            animateFunc(del);
        }
        if(e.code === 'Backspace'){
            animateFunc(backspace);
        }
        if(e.code === 'Tab'){
            animateFunc(tab);
        }
        if(e.code === 'Space'){
            animateFunc(space);
        }
        if(e.code === 'ArrowUp'){
            animateFunc(arrUp);
        }
        if(e.code === 'ArrowDown'){
            animateFunc(arrDown);
        }
        if(e.code === 'ArrowLeft'){
            animateFunc(arrLeft);
        }
        if(e.code === 'ArrowRight'){
            animateFunc(arrRight);
        }
        if(e.key === keys[i].innerHTML.toLowerCase() || e.key === keys[i].innerHTML.toUpperCase()) {
            animate(keys, i);
        };
    };
}
function animate(keys, i){
    keys[i].style.backgroundColor = '#6B6894';
    keys[i].style.border = '1px solid #6B6894';
    keys[i].style.borderRadius = '5px'; 
}
function animateFunc(block){
    block.style.backgroundColor = '#484661';
    block.style.border = '1px solid #484661';
    block.style.borderRadius = '5px';
}