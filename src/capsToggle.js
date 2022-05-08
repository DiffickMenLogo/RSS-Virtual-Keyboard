export default function caps(e, capsLock) {
    let capsDiv = document.querySelector('.caps')
    capsLock = e.getModifierState && e.getModifierState( 'CapsLock' );
    let keys = document.querySelectorAll('.key');
    if(capsLock === true){
        for(let i = 0; i < keys.length; i++) {
            if(keys[i].innerHTML.length === 1){
                keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
            }
        }
        capsDiv.style.backgroundColor = 'blue';
        capsDiv.style.border = '1px solid #blue';
        capsDiv.style.borderRadius = '20px';
    }else{
        for(let i = 0; i < keys.length; i++) {
            if(keys[i].innerHTML.length === 1){
                keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
            }
        }
        capsDiv.style.backgroundColor = '#484661';
        capsDiv.style.border = '1px solid #484661';
        capsDiv.style.borderRadius = '5px';
    };
};