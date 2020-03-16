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

    document.querySelector('.clear').addEventListener('click', clear)

    function clear(){
        display.value='';
    }

    document.querySelector('.eq').addEventListener('click', calculate)

    function calculate(){
       if(eval(display.value)===Infinity){
           display.value="Division by zero! = infinity";
       }
       if(String(eval(display.value)-parseInt(eval(display.value))).length>7){
           display.value=Number(eval(display.value)).toFixed(5);
       }
       else{
           display.value=eval(display.value);
       }
    }

    //alert(display.value);