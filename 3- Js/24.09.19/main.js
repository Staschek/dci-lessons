// // Secret Password
// let passWord = '$3cr37p4ssw0rd';


// function greet(){
//     let name = prompt("Please enter your name:");
//     if(name == "" || name == null){
//         txt = "There is no name!"     
//     }else{
//         txt = `Hello ${name}`
//     }
//     document.write(txt);
// }

// greet()


// let passW = prompt("Please enter your Password!")
// function checkPW(pw){
//     let dolla = false;
//     let counter = 0;
//     if(pw.length >= 8){
//         for(let i = 0; i < pw.length; i++){
// //counter for seeing if the condition is breaking after finding Sdolla ($)
//             counter++
        
//             if(pw[i] === '$'){
//                 dolla = true;
//                 break;
//             }
//         }
//     }else{
//         document.write("<br><br>Your Passwort is less than 8 Characters")
//         return false;
//     //return allways ends the function
//     }
//     console.log("Count is " + counter)

//     if(dolla){
//         document.write("<br><br>Your Password is Valid")
//     }else{
//         document.write("<br><br>Your Password has no *Dolla* sign")}

//  return dolla;
    
// }


// console.log(checkPW(passW));

// ///////////////////////////////////////////////////////7


// let paragraph = "the quick brown fox jumps pver the lazy dog." + 
// "If the dog barked, was it really lazy?";
// let str = prompt("search for an index of :");

// let result = `Yes it is found in the positin: ${paragraph.indexOf(str)}` 
// document.write(result)

// function searchForLetter(pW,ltr){
//     if(pW.indexOf(ltr) == 0){
//         return `This ${ltr} is not found in the given Password`
//     }else{
//         return `Yes it is found in the position : ${pW.indexOf(ltr)+1}`
//     }
// }
// let ltr1 = prompt('Search in my password for this letter :');
// let pass = "secret&2020";
// let result1 = searchForLetter(pass,ltr1);
// document.write(result1);

///////////////////////////////////////////////

