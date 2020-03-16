const display = document.querySelector('input');
let finished = false;
let divisionByZero = false;
let MS=0;

document.querySelectorAll('.digits button').forEach(button=>button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    finished === true ? (display.value = '',
    finished = false) : {};
    divisionByZero === true ? (display.value = '',
    divisionByZero = false) : {};
    display.value += ev.target.innerText;
}

document.querySelectorAll('.operators button').forEach(button=>button.addEventListener('click', operPressed));

function operPressed(ev) {
    finished = false;
    divisionByZero === true ? (display.value = '',
    divisionByZero = false) : {};
    if (display.value.length === 0) {
        alert("Statement can't start with operators!");
    } else {

        if (display.value[display.value.length - 1] === ev.target.innerText) {
            alert("Using two operators by each other is prohibited!");
        } else if ("-+*/!^".includes(display.value[display.value.length - 1])) {
            const newDisplay = display.value.slice(0, -1);
            display.value = newDisplay;
            display.value += ev.target.innerText;
        } else {
            display.value += ev.target.innerText;
        }
    }
}

document.querySelector('.clear').addEventListener('click', clear)

function clear() {
    display.value = '';
}

document.querySelector('.save').addEventListener('click', resultSave)

function resultSave() {
    MS=eval(display.value);
    display.value='';
}

document.querySelector('.display').addEventListener('click', resultShow)

function resultShow() {
    display.value+=MS;
}

document.querySelector('.eq').addEventListener('click', calculate)

function calculate() {

    if (display.value.includes("!")) {
        const num = eval(parseFloat(display.value.slice(0, display.value.indexOf('!'))));
        let factorial = 1;
        let descNum = num;
        while (descNum > 0) {
            factorial *= descNum;
            --descNum;
        }
        display.value = factorial;
    }

    if (display.value.includes("^")) {
        const base = eval(parseFloat(display.value.slice(0, display.value.indexOf('^'))));
        const exp = eval(parseFloat(display.value.slice(display.value.indexOf('^') + 1)));
        display.value = Math.pow(base, exp);
    }
    else if (eval(display.value) === Infinity) {
        display.value = "Division by zero! = infinity";
        divisionByZero = true;
    }
    else if (displat.value.slice(display.value.indexOf('.')+1).length > 7) {
        display.value = Number(eval(display.value)).toFixed(5);
    } else {
        display.value = eval(display.value);
    }

    finished = true;

}

//alert(display.value);