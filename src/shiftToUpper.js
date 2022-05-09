export default function shiftUp(e, caps) {
    const keys = document.querySelectorAll('.key');
    const upper = document.querySelectorAll('.upper');
    const lower = document.querySelectorAll('.lower');
    if(e.code === 'ShiftLeft'){
        for(let i = 0; i < keys.length; i++) {        
            if(keys[i].innerHTML.length === 1){
                if(caps === true){
                    keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
                }else{
                    keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
                }
            };
            if(keys[i].innerHTML === '['){
                keys[i].innerHTML = '{';
            };
            if(keys[i].innerHTML === ']'){
                keys[i].innerHTML = '}';
            };
            if(keys[i].innerHTML === '\\'){
                keys[i].innerHTML = '|';
            };
            if(keys[i].innerHTML === '\;'){
                keys[i].innerHTML = '\:';
            };
            if(keys[i].innerHTML === '\''){
                keys[i].innerHTML = '\"';
            };
            if(keys[i].innerHTML === '\,'){
                keys[i].innerHTML = '&lt;';
            };
            if(keys[i].innerHTML === '\.'){
                keys[i].innerHTML = '&gt;';
            }
            if(keys[i].innerHTML === '\/'){
                keys[i].innerHTML = '?';
            }
        }
        for(let i = 0; i < 13; i++) {
            if(e.repeat){
                continue;
            }else{
                // undoMas.push(keys[i].innerHTML);
                lower[i].style.display = 'none';
                upper[i].style.display = 'flex';
                upper[i].style.position = 'static';
                upper[i].style.fontSize = '20px';
            }
        }
    }
} 