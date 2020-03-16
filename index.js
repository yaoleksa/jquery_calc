const display=document.querySelector('input');
const result=document.querySelector('output .result.outres');
document.querySelectorAll('.digits button')
    .forEach(button=>button.addEventListener('click', digitPressed));

    function digitPressed(ev){
       display.value+=ev.target.innerText;
    }

    document.querySelectorAll('.operators button')
    .forEach(button=>button.addEventListener('click', digitPressed));

    function digitPressed(ev){
       display.value+=ev.target.innerText;
    }

    document.querySelector('.eq').addEventListener('click', calculate)

    function calculate(){
        display.value = eval(display.value);
    }