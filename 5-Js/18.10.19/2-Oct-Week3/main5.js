/*Challange Five*/

let str ="^,]%4B|@56a![0{2m>b1&4i4";

function lettersOnly(string) {
let re =/[^A-Za-z]/gi;  // "g" global dont stopp if it finds the first character
    if(re.test(string)){
        return string.replace(re, "");
    }
    else{return "There is no Characters";}
}

let result = lettersOnly(str);
console.log(result)