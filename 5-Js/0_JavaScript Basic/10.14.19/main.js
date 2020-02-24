let name = "Safwan"
let arry = ["Sascha", "Stefan", "Oliver", "Ruth", "Lana", "Andryosa", "Ali", "Mustafa", "Jack"]

function checkLength(name1, arry1){
    for(let i=0; i<arry1.length; i++){
        if (name1.length === arry1[i].length){
            console.log(`This Person is invited: ${arry1[i]} :)`)
        }else{
            console.log(`This Person is !invited: ${arry1[i]} :(`)
        }
    }
}
        
checkLength(name, arry);




///////////////////////////////////7777777777777

// let wort = "baden"
// function checkPlural(word){
//     if (word[word.length-1] == "s"){
//         console.log("This word is plural")
//     }else{
//         console.log("This word is not plural")
//     }
// }
// let xy = checkPlural(wort);


//////////////////////777777

// // function  visitthecity (city){
// //     if (city = "Hamburg"){
// //         return `you have visited ${city}`;}
// //     }
// //  document.write(visitthecity(citi))

// let citySearch = ["Hamburg", "Frankfurt", "Accra"]
// let citiesList = ["Hamburg","Istanbul","Frankfurt", "Berlin", "Kopenhagen"]

// function cityIveVisited(citiS, citiV){
//     let temp = [];
//     let matches = false;
    
//     for(i=0; i < citiV.length; i++)
//     {matches = false;
//         for(j=0; j < citiS.length; j++)
//             {if (citiV[i] === citiS[j])
//                 {matches = true;
//                 }
//             }
//     // Check if matches is true. If matches == false, u'll see the unvisited Cities
//         if(matches == true)
//             {temp.push(citiV[i])
//         }
//     }
//     return `You have visited: ${temp}`
// }

// document.write(cityIveVisited(citySearch, citiesList))
