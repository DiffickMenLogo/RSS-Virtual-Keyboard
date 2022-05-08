export default function shiftLow(caps) {
    const keys = document.querySelectorAll('.key');
    const lower = document.querySelectorAll('.lower');
    const upper = document.querySelectorAll('.upper');
    for(let i = 0; i < keys.length; i++) {        
        if(keys[i].innerHTML.length === 1){
            if(caps === true){
                keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
            }else{
                keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
            }
        };
        if(keys[i].innerHTML === '{'){
            keys[i].innerHTML = '[';
        };
        if(keys[i].innerHTML === '}'){
            keys[i].innerHTML = ']';
        };
        if(keys[i].innerHTML === '|'){
            keys[i].innerHTML = '\\';
        };
        if(keys[i].innerHTML === '\:'){
            keys[i].innerHTML = '\;';
        };
        if(keys[i].innerHTML === '\"'){
            keys[i].innerHTML = '\'';
        };
        if(keys[i].innerHTML === '&lt;'){
            keys[i].innerHTML = '\,';
        };
        if(keys[i].innerHTML === '&gt;'){
            keys[i].innerHTML = '\.';
        }
        if(keys[i].innerHTML === '?'){
            keys[i].innerHTML = '\/';
        }
    }
    for(let i = 0; i < 13; i++) {
        lower[i].style.display = '';
        upper[i].style.display = '';
        upper[i].style.position = 'relative';
        upper[i].style.fontSize = '15px';
    }

}