import "./scss/style.scss";
import calcLeft from "./calcLeft.js";
import keyDown from "./keyDown.js";
import keyUp from "./keyUp.js";
import caps from "./capsToggle.js";
import shiftUp from "./shiftToUpper.js";
import shiftLow from "./shiftToLower.js";
import convert from "./convertToRussian";
import create from "./createDom";
import inputTextarea from "./inputTextarea";
import functionalTestarea from "./functionalTestarea";
import mouseTap from "./mouseTap";
create();
calcLeft();
if(localStorage.lang === 'rus'){
    convert();
    calcLeft();
}
document.addEventListener('keydown', function(e){
    let capsLock = e.getModifierState && e.getModifierState( 'CapsLock' );
    if(e.code === 'CapsLock'){
        caps(e, capsLock);
    };
    keyDown(e);
    if(e.altKey && e.shiftKey){
        convert(e);
        calcLeft();
    }
    if(!e.altKey && e.code === 'ShiftLeft'){
        shiftUp(e,capsLock);
    }
    functionalTestarea(e);
});
document.addEventListener('keyup', function(e){
    let capsLock = e.getModifierState && e.getModifierState( 'CapsLock' );
    keyUp(e);
    if(!e.altKey && e.code === 'ShiftLeft'){
        shiftLow(capsLock);
    }
    calcLeft();
    caps(e,capsLock);
});
document.addEventListener('keypress', function(e){
    inputTextarea(e);
});
const lower = document.querySelectorAll('.lower');
const keys = document.querySelectorAll('.key');
const textarea = document.querySelector('textarea');
keys.forEach(key => {
    key.addEventListener('click', e => {
        if(key.innerHTML.length > 10){
            textarea.innerHTML += key.querySelector('.lower').innerHTML;
        }
        else if(key.innerHTML.length === 1){
            textarea.innerHTML += key.innerHTML;
        }else{
            mouseTap(e);
        }
    });
});

