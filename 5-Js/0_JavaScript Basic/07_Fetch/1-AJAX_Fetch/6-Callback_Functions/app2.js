const arr = [1,5,6,4,9,80,4,2,1,55];
let max = arr.reduce((a,b) => (a > b ? a : b))
let max2 = Math.max(...arr)
console.log(max)
console.log(max2)

let num2 = [1,2,3,10,5,6]
let average = num2.reduce((a,b) => (a + b))
console.log(average)

function averFunc (...num){
    let sum = 0;
    for(i=0; i<Number.length;i++){
        sum += num[i];
    }
    return sum / num.length;
}

let x = averFunc(...num2)
console.log(x)
let average2 = averFunc(1,2,3,10,5,6)
console.log(average2)

//using sprad in Objects
let obj = {
    name: 'Jay',
    age:28
}

let objOne = {...obj} //copying Object
console.log(obj)
console.log(objOne)


let obj0 = {
    firstName: 'Jay',
    age:28
}

let obj1 = {
    secondName: 'Larrison',
    gender: 'male'
} 
let twoObj = {...obj0, ...obj1, nationality: 'german'
}
console.log(twoObj)

//Destruturing
let ar = [20,'firststring', [5,66], 'second String', 50];
let [,firstString,,seondString] = ar;
let [firstNum,,firstArr,,secondNum] = ar;
console.log(firstArr)
console.log(secondNum)
console.log(seondString)

//destructuring in objects
const ob = {firstName: 'Mostafa', lastName:'Othman', age: 50}
const {firstName, age} = ob;
console.table(age, firstName)
console.log(typeof firstName)
let text = 'masdas'
console.table(firstName, 50)

// Rest operator
const numbers = [1,2,3]
const [,...rNumbers] = numbers
//console.log(fNumbers)
console.log(rNumbers)

const [...allElement] = document.querySelectorAll('h1, h,n')
console.log(allElement)

let elem = `${allElement[allElement.length-1].outerHTML}` 
console.log(elem)
document.onmouseup = () => document.body.lastElementChild.insertAdjacentHTML('afterend', elem) 