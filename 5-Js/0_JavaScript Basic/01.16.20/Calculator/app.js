//Get Elements from DOM
const cal = document.querySelectorAll('button')
const inp = document.getElementsByClassName('calculator-screen')
//inp.value  = 0

console.table(cal, inp)





//versucht mit functionalem Programmieren die Taschenrechner Funktion zu bauen. Funtioniert nicht weil operatoren nicht von string convertiert werden können

// function calculate(op){
//     return function (fValue, sValue) { 
//         return fValue + op + sValue}
// }

// let plus = calculate('+')
// let minus = calculate('-')
// let mal = calculate("*")
// let dived = calculate('/')
// let result = parseInt(minus(12,32))
// console.log(result)


// let plus = calculate('+')
// let minus = calculate('-')
// let mal = calculate("*")
// let dived = calculate('/')
// let result = minus(12,32)
// console.log(result)