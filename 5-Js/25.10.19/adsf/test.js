//console.log(code[Object.keys(code)[2]])




const MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9"
};
function morseDecoder(text, code){
    let arr1  ;
    let arr2 = [];
    let arr3;
    let re = /[.-]*/ig;
    console.log(text)
    arr1 = text.match(re);
    console.log(code[Object.keys(code)[2]])
    /* arr1 =text.toString();
    for(i=0;i<arr1.length;i++){
      re = new RegExp(code[arr1[i]],"g");
      console.log(re)
     arr3 = arr1.replace(re,code[arr1[i]]);
} */
    console.log(arr3)
    for(k=0;k<arr1.length;k++){
        if(arr1[k] ==""){
            console.log('adfa')
             arr1.splice(k,1);
        }
    }  
    for(i=0;i<arr1.length;i++){
       arr2.push(code[arr1[i]])
}
console.log(arr3)
for(l=0;l<arr2.length;l++){
        if(arr2[l] ==undefined){
        arr2[l] =" ";
        }
    }
    arr2 = arr2.toString()
    arr3 = arr2.replace(/,/g,''); 
   console.log(arr3)
return arr3 ;
}


let encryptedText ='.... . -.--   .--- ..- -.. .' ;
document.write(morseDecoder(encryptedText, MORSE_CODE)); 
