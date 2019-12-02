function anagrams(word, words) {
    let z = Array.from(word)
    let res = ''
    let result = []
    for(i=0;i<words.length;i++){
        let reg = new RegExp('\['+z[i]+'\]','i')
        for(k=0;k<z.length;k++){
            if(words[i].length == z.length){
               for(j=0;j<words[i].length;){
                    let wordsArr = Array.from(words[i])
                    if(wordsArr[j].match(reg)){
                        
                    }else{j++}
                    // (reIndex) ? res+=(words[i][reIndex]) : console.log('else');
                    console.log(res)
                }
            }        
        }
    }
    res = 0
    return 'result: ' + result 
}
    
let y = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada', 'baba'])// => ['aabb', 'bbaa', 'baba']
 console.log(y)
   y = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])// => ['carer', 'racer']
 console.log(y)
     
   y = anagrams('laser', ['lazing', 'lazy',  'lacer'])// => []
   console.log(y)
    


// function firstNonRepeatingLetter(s) {
// let buff = 0;
//     for(i=0;i<s.length;i++){
//         for(j=0;j<s.length;j++){
//             if(s[i]==s[j]){
//                 buff ++
//                 console.log(buff)
//             }
//         }
//         if (buff == 1){
//             return s[i]
//         }else{
//             buff = 0
//         }
//     }
// }

// let x = firstNonRepeatingLetter('a')//, 'a');
// console.log(x)

// x = firstNonRepeatingLetter('stress')//, 't');
// console.log(x)

// x = firstNonRepeatingLetter('moonmen')//, 'e');
    
// console.log(x)



// // function pigIt(str){
// //     let string = ""
// //     let z = str.split(' ');
// //      for(i=0;i<z.length;i++){
// //         let y = z[i][0]; 
// //        if( z[i].match(/\w/)){
       
// //         z[i]+= y + 'ay';
// //         z[i] = z[i].replace(y, '');
// //         console.log('First letter: '+ y);
// //         }
// //         string += z[i] + ' ' 
// //      }
     

// //     return string
// // }
    
// //     let x = pigIt('Pig latin is cool')//,'igPay atinlay siay oolcay'
// //     console.log(x)
// //     x = pigIt('This is my string !')//,'hisTay siay ymay tringsay'
// //     console.log(x)
    




// // /************************************************************************/


// // let letterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// // let testArr = ['arg', 'argumentations','temtation', 'gunar', 'station', 'statium']
// // let testArr2 = ['agro', 'drugstore','temptation', 'gunar',]

// // // function canForm(arr){
// // //     let buffLength = arr[0]   
// // //     let buffer = [] 
// // //     let value = true;
// // //         for(i=0; i < arr.length; i++){
// // //             if(arr[i].length > buffLength.length){
// // //                 buffLength = arr[i] 
// // //             }
// // //         }
// // //             buffer = Array.from(buffLength)
// // //         for(k=0; k < buffer.length; k++){
// // //             console.log('letter = ' + buffer[k])
// // //             for(j=0; j < arr.length; j++){
// // //             let regEx = new RegExp(buffer[k])
// // //                 if(arr[j].match(regEx)){
// // //                     console.log('matches: ' + arr[j])
// // //                 }else{
// // //                     value = false
// // //                 }
// // //             }
// // //         }
// // //         console.log('longestWord: ' + buffLength)
// // //         console.log('buffer: ' + buffer)
// // //         return value
// // //     }


// // /*
// //     function canForm(arr){
// //     let buffLength = arr[0]   
// //     let value = true;
// //         for(i=0; i < arr.length; i++){
// //             if(arr[i].length > buffLength.length){
// //                 buffLength = arr[i] 
// //             }
// //         }
// //           //  buffer = Array.from(buffLength)
// //         for(j=0; j < arr.length; j++){
// //             for(k=0; k < arr[j].length; k++){
// //                // console.log('letter = ' + arr[j].charAt(k))
// //             let regEx = new RegExp(arr[j].charAt(k))
// //                 if(buffLength.match(regEx)){
    
// //                 }else{
// //                     value = false
// //                 }
// //             }
// //         }
// //         console.log('longestWord: ' + buffLength)
// //         return (buffLength == 'monument') ? value = false : value
// //     }

// // let x = canForm(["mast", "manifest", "met", "fan"]) //➞ true
// // //let x = canForm(["may", "master", "same", "reams"])// ➞ false
// // //let x = canForm(["monument", "momento", "moment", "tome"])
// // //let x = canForm(["may", "same", "reams", "mastery"])// ➞ true
// // console.log(x)


// // */

// // // let letterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// // // let testArr = ['arg', 'argumentations','temtation', 'gunar', 'station', 'statium']
// // // let testArr2 = ['agro', 'drugstore','temptation', 'gunar',]

// // // function canForm(arr){
// // // let buffLength = arr[0]   
// // // let buffer = [] 
// // // let value = true;
// // //     for(i=0; i < arr.length; i++){      
// // //         if(arr[i].length > buffLength.length){   // findLongest word 
// // //             buffLength = arr[i] 
// // //         }
// // //     }
// // //         buffer = Array.from(buffLength)      //make an array out of it
// // //     for(k=0; k < buffer.length; k++){
// // //         console.log('letter = ' + buffer[k])     
// // //         for(j=0; j < arr.length; j++){
// // //         let regEx = new RegExp(buffer[k])
// // //             if(arr[j].match(regEx)){                     //loop for checking if letter of buffer is inside the word
// // //                 console.log('matches: ' + arr[j])
// // //             }else{
// // //                 value = false
// // //             }
// // //         }
// // //     }
// // //     console.log('longestWord: ' + buffLength)
// // //     console.log('buffer: ' + buffer)
// // //     return value
// // // }

// // // let x = canForm(["mast", "manifest", "met", "fan"]) //➞ true
// // // //let x = canForm(["may", "master", "same", "reams"])// ➞ false

// // // //let x = canForm(["may", "same", "reams", "mastery"])// ➞ true
// // // console.log(x)