export default function mouseTap(e) {
    if(e.target.innerHTML === 'Tab'){
        textarea.innerHTML += '\t';
    }
    if(e.target.innerHTML === 'Backspace'){
        textarea.innerHTML = textarea.innerHTML.slice(0, -1);
    }
    if(e.target.innerHTML === 'Delete'){
        textarea.innerHTML = textarea.innerHTML.slice(1);
    }
    if(e.target.innerHTML === 'Enter'){
        textarea.innerHTML += '\n';
    }
}