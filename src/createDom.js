export default function create(){
    const body = document.querySelector('body');
    body.innerHTML = `
    <div class="textarea">
    <textarea name="textarea" id="textarea" cols="136" rows="17"></textarea>
</div>
<div class="keybord">
    <div class="line">
        <div class="key"><div class="upper">~</div><p class="lower">\`</p></div>
        <div class="key"><div class="upper">!</div><p class="lower">1</p></div>
        <div class="key"><div class="upper">@</div><p class="lower">2</p></div>
        <div class="key"><div class="upper">#</div><p class="lower">3</p></div>
        <div class="key"><div class="upper">$</div><p class="lower">4</p></div>
        <div class="key"><div class="upper">%</div><p class="lower">5</p></div>
        <div class="key"><div class="upper">^</div><p class="lower">6</p></div>
        <div class="key"><div class="upper">&</div><p class="lower">7</p></div>
        <div class="key"><div class="upper">*</div><p class="lower">8</p></div>
        <div class="key"><div class="upper">(</div><p class="lower">9</p></div>
        <div class="key"><div class="upper">)</div><p class="lower">0</p></div>
        <div class="key"><div class="upper">&#8212;</div><p class="lower">-</p></div>
        <div class="key"><div class="upper">+</div><p class="lower">=</p></div>
        <div class="key backspace" id="functional">Backspace</div>
    </div>
    <div class="line">
        <div class="key tab" id="functional">Tab</div>
        <div class="key">q</div>
        <div class="key">w</div>
        <div class="key">e</div>
        <div class="key">r</div>
        <div class="key">t</div>
        <div class="key">y</div>
        <div class="key">u</div>
        <div class="key">i</div>
        <div class="key">o</div>
        <div class="key">p</div>
        <div class="key">[</div>
        <div class="key">]</div>
        <div class="key">\\</div>
        <div class="key del" id="functional">Del</div>
    </div>
    <div class="line">
        <div class="key caps" id="functional">Caps Lock</div>
        <div class="key">a</div>
        <div class="key">s</div>
        <div class="key">d</div>
        <div class="key">f</div>
        <div class="key">g</div>
        <div class="key">h</div>
        <div class="key">j</div>
        <div class="key">k</div>
        <div class="key">l</div>
        <div class="key">;</div>
        <div class="key">'</div>
        <div class="key enter" id="functional">Enter</div>
    </div>
    <div class="line">
        <div class="key left-shift" id="functional">Shift</div>
        <div class="key">z</div>
        <div class="key">x</div>
        <div class="key">c</div>
        <div class="key">v</div>
        <div class="key">b</div>
        <div class="key">n</div>
        <div class="key">m</div>
        <div class="key">,</div>
        <div class="key">.</div>
        <div class="key">/</div>
        <div class="key arr-up" id="functional">&uarr;</div>
        <div class="key right-shift" id="functional">Shift</div>
    </div>
    <div class="line">
        <div class="key ctrl-left" id="functional">Ctrl</div>
        <div class="key win" id="functional">Win</div>
        <div class="key alt-left" id="functional">Alt</div>
        <div class="key space" id="functional"></div>
        <div class="key alt-right" id="functional">Alt</div>
        <div class="key ctrl-right" id="functional">Ctrl</div>
        <div class="key arr-left" id="functional">&larr;</div>
        <div class="key arr-down" id="functional">&darr;</div>
        <div class="key arr-right" id="functional">&rarr;</div>
    </div>
</div>
<div class="change-language">Change language Shift + Alt</div>
`;
}