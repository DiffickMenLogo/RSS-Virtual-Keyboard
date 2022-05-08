export default function functionalTestarea(e) {
    if(e.code === 'Tab'){
        textarea.innerHTML += '\t';
        e.preventDefault()
    }
    if(e.code === 'Backspace'){
        textarea.innerHTML = textarea.innerHTML.slice(0, -1);
    }
    if(e.code === 'Delete'){
        textarea.innerHTML = textarea.innerHTML.slice(1);
    }
    if(e.code === 'ArrowLeft'){
        textarea.innerHTML += '&larr;'; 
    }
    if(e.code === 'ArrowRight'){
        textarea.innerHTML += '&rarr;';
    }
    if(e.code === 'ArrowUp'){
        textarea.innerHTML += '&uarr;';
    }
    if(e.code === 'ArrowDown'){
        textarea.innerHTML += '&darr;';
    }
    if(e.altKey){
        e.preventDefault();
    }
    if(e.code === 'MetaLeft'){
        e.preventDefault();
    }
}