// Form Blur Event Listeners
const input = document.getElementById('enigma');
const button = document.getElementById('button');
input.addEventListener('blur', validateInput);
button.addEventListener('click', enigmaDecrypt);

const re = /[.-]+$/gi;
let output = "";

function validateInput() {
    // if(!re.test(input.value)){
    //     input.classList.add('is-invalid');
    // } else {
    //     input.classList.remove('is-invalid');
    // }
}

  let MORSE_CODE = {
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
    "----.": "9",
    "...−−−...": "SOS",
    ".-.-.-": "~",
    "--..--": ",",
    "..--..": "?",
    "-..-.": "/",
    "-.-.--": "!"
};

function enigmaDecrypt(){
    if (re.test(input.value)){
        let words = input.value.split('   ');
        //    console.log(word)
        for(i = 0; i < words.length; i++){
            let letters = words[i].split(' ');
            //console.log(letters)
            for(j = 0; j < letters.length; j++){
                // console.log(letters[j])
                output+= MORSE_CODE[letters[j]]
            }
            output+= " "
        }
        input.value = output;
    }else{
        console.log("Morsecode Ascii")
        let word = input.value.split(' ');
        for(i = 0; i < word.length; i++){
            //console.log(word)
            let letter = word[i];
            // console.log(letter)
            for(j = 0; j < letter.length; j++){
                // console.log(letter[j])
                // console.log(Object.keys(MORSE_CODE)[j])
                      output+= Object.keys(MORSE_CODE)[j]
            }
        }
        input.value = output;
    }
}
//console.log('output :'+ output)

