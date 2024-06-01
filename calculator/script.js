// number buttons 
const cero = document.getElementById("zero");
const uno = document.getElementById("num-one");
const dos = document.getElementById("num-two");
const tres = document.getElementById("num-three");
const cuatro = document.getElementById("num-four");
const cinco = document.getElementById("num-five");
const seis  = document.getElementById("num-six");
const siete = document.getElementById("num-seven");
const ocho = document.getElementById("num-eight");
const nueve = document.getElementById("num-nine");

// numerical operation buttons
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const signchange = document.getElementById("sign-change");
const decimalpoint = document.getElementById("decimal-point");
const percentage = document.getElementById("percentage");
const inverse = document.getElementById("inverse");
const square = document.getElementById("square");
const squareroot = document.getElementById("square-root");
const factorial = document.getElementById("factorial");

// main calculation button - this is the mvp
const equals = document.getElementById("equals");

// text-field manipulation buttons
const backspace = document.getElementById("backspace");
const c = document.getElementById("c");

//calculator text selector
const formula_f = document.getElementById("formula-field");
const number_f = document.getElementById("number-field");

// operand variables
let number_1 = "";
let number_2 = "";

// flag variable and operator checker for detecting operations and their completeness
let flag_var = 0;
let operator_var = "";

// operations
const addition = (number1, number2) => number1 + number2;
const subtraction = (number1, number2) => number1 - number2;
const multiplication = (number1, number2) => number1 * number2;
const division = (number1, number2) => number1 / number2;
const percentageof = (number1, number2) =>  (number1 * number2) / 100;

const inversecalc = (number) => 1 / number;
const squarecalc = (number) => Math.pow(number,2);
const squarerootcalc = (number) => Math.pow(number,1/2);

const signchangecalc = (number) => {
    if(number > 0){
        return number - 2 * number;
    }
    else if(number < 0){
        return number + 2 * number;
    }
    else if(number === 0){
        return 0;
    }
    else{
        return NaN;
    }
}

// number inputs

const eins = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "1";
    //console.log("1");
}

const zwei = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "2";
    //console.log("2");
}

const drei = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "3";
    //console.log("3");
}

const vier = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "4";
    //console.log("4");
}

const funf = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "5";
    //console.log("5");
}

const sechs = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "6";
    //console.log("6");
}

const sieben = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "7";
    //console.log("7");
}

const acht = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "8";
    //console.log("8");
}

const neun = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "9";
    //console.log("9");
}

const nu_ll = () => {
    if(flag_var !== 0){
        number_f.value = "";
        flag_var = 0;
    }
    number_f.value += "0";
    //console.log("0");
}

// calc functions with two numbers

const add_num = () => {
    number_1 = parseFloat(number_f.value);
    number_f.value = "";
    operator_var = "+";
    formula_f.value = "";
    formula_f.value += `${number_1} ${operator_var} `;
}

const sub_num = () => {
    number_1 = parseFloat(number_f.value);
    number_f.value = "";
    operator_var = "-";
    formula_f.value = "";
    formula_f.value += `${number_1} ${operator_var} `;
}

const mul_num = () => {
    number_1 = parseFloat(number_f.value);
    number_f.value = "";
    operator_var = "*";
    formula_f.value = "";
    formula_f.value += `${number_1} ${operator_var} `;
}

const div_num = () => {
    number_1 = parseFloat(number_f.value);
    number_f.value = "";
    operator_var = "/";
    formula_f.value = "";
    formula_f.value += `${number_1} ${operator_var} `;
}

const per_num = () => {
    number_1 = parseFloat(number_f.value);
    number_f.value = "";
    operator_var = "%";
    formula_f.value = "";
    formula_f.value += `${number_1} ${operator_var} of `;
}

// calc functions with one number

const inv_num = () => {
    formula_f.value = `1 / (${number_f.value}) = `
    number_f.value = parseFloat(inversecalc(number_f.value));
}

const sqrt_num = () => {
    formula_f.value = `(${number_f.value})^1/2 = `
    number_f.value = parseFloat(squarerootcalc(number_f.value));
}

const sqr_num = () => {
    formula_f.value = `(${number_f.value})^2 = `
    number_f.value = parseFloat(squarecalc(number_f.value));
}

const flip_sign = () => {
    number_f.value = parseFloat(signchangecalc(number_f.value));
}

const fact_calc = () => {
    fact_value = 1;
    if(number_f.value === 0){
        number_f.value = 1;
    }
    else if(number_f.value < 0){
        number_f.value = "Please enter a positive number";
        return;
    }
    else{
        for(let i = 1; i <= parseInt(number_f.value); i++){
            fact_value = fact_value * i;
        }
    }
    //console.log(fact_value);
    number_f.value = parseFloat(fact_value);
}

// function to insert decimal point

const dec_pnt = () => {
    const dec_num_str = toString(number_f.value);
    if(dec_num_str.includes(".")){
        return;
    }
    else{
        number_f.value += ".";
    }
}

// equal button function

const equal_func = () => {
    number_2 = parseFloat(number_f.value);
    if(operator_var !== ""){
        switch (operator_var) {
            case "+":
                formula_f.value += `${number_2} = `;
                number_f.value = parseFloat(addition(number_1, number_2));
                operator_var = "";
                flag_var = 1;
                break;
            case "-":
                formula_f.value += `${number_2} = `;
                number_f.value = parseFloat(subtraction(number_1, number_2));
                operator_var = "";
                flag_var = 1;
                break;
            case "*":
                formula_f.value += `${number_2} = `;
                number_f.value = parseFloat(multiplication(number_1, number_2));
                operator_var = "";
                flag_var = 1;
                break;
            case "/":
                formula_f.value += `${number_2} = `;
                number_f.value = number_2 !== 0 ? parseFloat(division(number_1, number_2)) : "Cannot divide by zero";
                operator_var = "";
                flag_var = 1;
                break;
            case "%":
                formula_f.value += `${number_2} = `;
                number_f.value = parseFloat(percentageof(number_1, number_2));
                operator_var = "";
                flag_var = 1;
                break;
            default:
                break;
        }
    }
    else{
        formula_f.value = number_f.value === "Cannot divide by zero" || "Please enter a positive number" ? "" : number_f.value;
        return;
    }
}

// clear function

const clr_scrn = () => {
    number_f.value = "";
    formula_f.value = "";
}

// backspace function

const bkspc = () => { 
    number_f.value = number_f.value.slice(0, (number_f.value.length)-1);
    console.log(number_f.value);
}

// number button assignments

cero.addEventListener("click",nu_ll);
uno.addEventListener("click",eins);
dos.addEventListener("click",zwei);
tres.addEventListener("click",drei);
cuatro.addEventListener("click",vier);
cinco.addEventListener("click",funf);
seis.addEventListener("click",sechs);
siete.addEventListener("click",sieben);
ocho.addEventListener("click",acht);
nueve.addEventListener("click",neun);

// unary operator assignments

inverse.addEventListener("click",inv_num);
square.addEventListener("click",sqr_num);
squareroot.addEventListener("click",sqrt_num);
signchange.addEventListener("click",flip_sign);
factorial.addEventListener("click",fact_calc);

// decimal point assignment
decimalpoint.addEventListener("click",dec_pnt);

// binary operator assignments

add.addEventListener("click",add_num);
subtract.addEventListener("click",sub_num);
multiply.addEventListener("click",mul_num);
divide.addEventListener("click",div_num);
percentage.addEventListener("click",per_num);
equals.addEventListener("click",equal_func);

// clear and backspace button assignments

c.addEventListener("click",clr_scrn);
backspace.addEventListener("click",bkspc);