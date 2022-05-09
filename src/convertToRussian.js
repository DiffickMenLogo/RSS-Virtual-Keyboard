export default function convert(e){
    const russianLetter = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','\.'];
    const englishLetter = ['q','w','e','r','t','y','u','i','o','p','[',']','\\','a','s','d','f','g','h','j','k','l','\;','\'','z','x','c','v','b','n','m','\,','\.','\/'];
    const upperRus = ['!','\"','№','\;','%','\:','?','*','(',')','_','+'];
    const upperEng = ['!',"@",'#','$','%','^','&','*','(',')','_','+'];
    const keys = document.querySelectorAll('.key');
    const upper = document.querySelectorAll('.upper');
    let j = 0;
    if(keys[15].innerHTML === 'q'){
        localStorage.setItem('lang', 'rus');
        for(let i = 15; i < keys.length; i++) {
            if(keys[i].innerHTML.length === 1){
                if(i > keys.length - 12){
                    continue;
                }
                keys[i].innerHTML = russianLetter[j];
                j++;
            }
        }
    }else{
        localStorage.setItem('lang', 'eng');
        for(let i = 15; i < keys.length; i++) {
            if(keys[i].innerHTML.length === 1){
                if(i > keys.length - 12){
                    continue;
                }
                keys[i].innerHTML = englishLetter[j];
                j++;
            }
        }
    }
    if(localStorage.lang === 'rus'){
        keys[0].innerHTML = '<div class="upper">~</div><div class="lower">ё</div>';
    }else{
        keys[0].innerHTML = '<div class="upper">~</div><p class="lower" style="right: 4.5px;">`</p>';
    }
    let k = 0;
    if(localStorage.lang === 'rus'){
        for(let i = 1; i < 13; i++){
            upper[i].innerHTML = upperRus[k];
            k++;
        }
    }else{
        for(let i = 1; i < 13; i++){
            upper[i].innerHTML = upperEng[k];
            k++;
        }
    }
}