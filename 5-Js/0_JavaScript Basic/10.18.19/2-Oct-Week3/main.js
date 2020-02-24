/*Challange One*/

let re =",./!@#";

function checkSpace(rE) {
let space =/\s/;
    if(space.test(rE))
    return true;
    else{return false;}
}

let result = checkSpace(re);
console.log(result)