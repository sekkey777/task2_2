
/* 変数 */
let result = "";
const multi = document.querySelector('.multi');
const division = document.querySelector('.div');
const number = document.querySelectorAll('.number');
const zero = document.querySelector('.zero');
const dobule_zero = document.querySelector('.double_zero');
const dot = document.querySelector('.dot');

/* 数値が押された時 */
function num_button(btn_num) {
    multi.disabled = false;
    division.disabled = false;
    number.forEach( number => number.disabled =false);
    zero.disabled = false;
    dobule_zero.disabled = false;
    dot.disabled = false;
    if(result === "") {
        result = btn_num;
        document.getElementById('display').textContent = result;
    }
    else if(result !== "") {
        result += btn_num;
        document.getElementById('display').textContent = result;
    }
}

/* 0が押された時 */
function zero_button(zero_num) {
    multi.disabled = false;
    division.disabled = false;
    dot.disabled = false;
    if(result === "") {
        result = zero_num;
        console.log(number)
        number.forEach( number => number.disabled =true);
        zero.disabled = true;
        dobule_zero.disabled = true;
        console.log(1)
        document.getElementById('display').textContent = result;
    }
    else if(result.slice(-1) === "/") {
        document.getElementById('display').textContent = result;
    }
    else if(result !== "") {
        result += zero_num;
        document.getElementById('display').textContent = result;
    }
}

/* 演算子（＋ー＊／）が押された時 */
function operator(btn_sign) {
    result = document.getElementById('display').textContent;
    x = result.slice(-1);
    zero.disabled = false;
    number.forEach( number => number.disabled =false);
    if(x!=="+" && x!=="-" && x!=="*" && x!=="/" && x!==".") {
        console.log(1);
        result += btn_sign;
        document.getElementById('display').textContent = result;
    }
    else if(x==="+" || x==="-" || x==="*" || x==="/" || x!==".") {
        console.log(2);
        result = result;
        document.getElementById('display').textContent = result;
    }
}

/* ACが押された時 */
function reset() {
    result = "";
    multi.disabled = true;
    division.disabled = true;
    number.forEach( number => number.disabled =false);
    zero.disabled = false;
    dobule_zero.disabled = true;
    dot.disabled = true;
    document.getElementById('display').textContent = result;
}

/* =が押された時 */
function calc_button() {
    let formula = document.getElementById('display').textContent;
    result = new Function("return " + formula)();
    document.getElementById('display').textContent = result;
}



