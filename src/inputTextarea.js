export default function inputTextarea(e) {
    const textarea = document.querySelector('textarea');
    if(e.code === 'Enter'){
        textarea.innerHTML += '\n';
    }
    if(e.code !== 'Enter'){
        textarea.innerHTML += e.key;
    }
}