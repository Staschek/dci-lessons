//Get Elements from DOM
const cal = document.querySelectorAll('button')
const inp = document.getElementsByClassName('calculator-screen')
inp.value  = 0




const firstValue = 22
const secondValue = 22

function calculate(o){
    return function (fValue, sValue) { 
        return fValue + parseFloat(o) + sValue}
}

let plus = calculate(`/u+002B/`)
let minus = calculate('-')
let mal = calculate("*")
let dived = calculate('/')
let result = mal(22,11)
console.log(result)
