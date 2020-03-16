const display=document.querySelector('input');

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