// var P;
// function yearsInvest(Pri,Des){
//     const I = 0.05;
//     const T = 0.18;
//     if (Pri == Des){
//         P = 0
//     } else{

//         for(i = 0; Pri < Des; i++){
//           //  console.log(Pri)
//             Pri += (Pri * I) - ((Pri * I) * T);
//             P=Pri;
//         }
//         return ((Pri>Des) ? i : i);
//     }
// }

// let result = yearsInvest(1000, 1100)
// console.log(`After ${((result == undefined) ? 0 : result)}rd Year -->\n\t P = ${P.toFixed(2)}`)

// let arry = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']
//     arry.forEach(element => {  
//         let re = /needle/gi;
//         console.log(re.index)
//         if(re.test(element)) {
//             console.log( `found the needle at position ` + re.lastIndex)
//         }
//     });


// console.log(arry)

function removeSmallest(arry){
    let buff = [];
    for(i = 0; i < arry.length; i++){
       buff.push(arry[i])
       //console.log("buff " + buff)
       buff[i] < arry[i+1] ? buff.pop() : console.log("end");
    }
    return buff
}
let arr = [5,0,4,3,1,2,1,3,4,5]
let result = removeSmallest(arr)
console.log(result)