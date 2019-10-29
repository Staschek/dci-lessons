/* 
1 - Local Scope:
Old generation - function Scope
new gereration - fucntion Scope, {block} Scope

2 - Global Scope

Example:
declare a Variable with var
*/

// var name = "Jojohn doehn Doe";
// console.log(name);
// //declare a variable with let
// let email = 'adress@domain.suffix'
// //reassign it
// name = 'sascha'
// email = 'safwan@webmail.com'
// console.log(name, email)

//var G & L Scope
function show(){
    var num = 5;
    console.log(num)
}

var num = 9;
show();
console.log(num);

{
    var num = 7;
    console.log(num);

}

    console.log(num);

    // let  & const G & L Scope
function print(){
    let number = 107;
    console.log(number)
}
{
    let number = 112;
    console.log(number)

}

let number = 109;
console.log(number)

print()

//Init - declaring a variable without giving it a value(this is allowed only using var or let)
let _someThing;
console.log(_someThing);

// Variable Name can consist of numbers, ,letters, _ , $
//Can not start with Numbers
//recommended camleCase names

//CONST

const name = 'John Doe'
console.log(name);

//can NOT reassign a new value
// name = "steve";
//Can NOT init
//const someThing;
//Exeptions to const
//Objects and Arrays can be mutated
//Objact Example :
const person = {
    name: 'Jay',
    age:23
}
console.log(person);
person.name = 'Ray'
person.age = 25;
console.log(person);

/* But not like below:
person = {
    name: 'Ray',
    age: 25
}
*/

//Array Example;
const arr = [1,2,3,4,5]
console.log (arr);
arr.push("added value")
console.log(arr);
arr.push("added value")
console.log ( arr);
//But Not
//arr = [44,53]

// *First Ex
function greeting(greetWord, name){
    let greetPhrase
    return greetPhrase
}

const greetingMe = greeting('Hi', 'Me');

// *Second EX:
function findPhrase(text, phrase){
    let re = new RegExp(phrase, "gi");
    let numberOfRepeatition = 0;
    let buff= text.split(' ')
     //   console.log(buff)
     console.log("Match: " + text.match(re).length)
     for(i=0;i<buff.length;i++){
         if(re.test(buff[i])){
        //    console.log("Exec: " + re.lastIndex)
          numberOfRepeatition++;
      }  
    }
    return numberOfRepeatition
}
let text1 = 'The Rabbit was jumpn all rabbit the time wiht other rabbits rabbit'
let phrase1 = 'rabbit'

const num1 = findPhrase(text1, phrase1)
console.log(num1)