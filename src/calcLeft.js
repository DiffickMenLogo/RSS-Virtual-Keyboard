export default function calcLeft() {  
    const upper  = document.querySelectorAll('.upper');
    const lower  = document.querySelectorAll('.lower');
    let left = 0;
    for (let i = 0; i < upper.length; i++) {
        left = upper[i].offsetWidth;
        lower[i].style.right = (left/2) + 'px';
    } 
}