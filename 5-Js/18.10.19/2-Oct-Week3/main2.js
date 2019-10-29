/*Challange Two*/

let str ="23cc4";

function checkDigit(string) {
let re =/[0-9]/;
    if(re.test(string))
    return true;
    else{return false;}
}

let result = checkDigit(str);
console.log(result)