/*Challange Four*/

let str ="hello";

function replaceVowels(string) {
let re =/[aeiou]/gi;  // "g" global dont stopp if it finds the first character
    if(re.test(string)){
        return string.replace(re, "*");
    }
    else{return "There is no Vowels";}
}

let result = replaceVowels(str);
console.log(result)