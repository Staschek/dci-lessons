
//the function oSKeyboardF will generate an onscreenkeyboard
//and it will give back the value of a clicked key by onclick or ontouch
//
function oSKeyboardF(){
let oSKeyboardO=document.getElementById('oSKeyboard');
console.log(oSKeyboardO);
let oSKbCharA=['1234567890ß','qwertzuiopü+','asdfghjklöä#','<yxcvbnm,.-'];//four characterrows of the keyboard german without shift
let oSKbCharCapsA=['!"§$%&/()=?','QWERTZUIOPÜ+','ASDFGHJKLÖÄ#','<YXCVBNM,.-'];// four keyboardrows with pressed shift

for(row=0;row<4;row++){
    kbCharS=oSKbCharA[row];
    nullChkB=true;

    for(key=0;nullChkB;key++){
               nullChkB=(kbCharS.substr(key+1, 1)==''? false : true); //if the substring is empty, the boolean is set to false which escapes the for loop
        console.log(kbCharS.substr(key, 1));

    }
}
//.substr(7, 6);
}

oSKeyboardF();

//let xxS='blabla';
//console.log((xxS.substr(10, 1))==''?'empty':'yeah');