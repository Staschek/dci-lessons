// function bOm(arrOfnum){
//     let temp = [];
//         arrOfnum.forEach(function(element){
//             if ((element % 7) == 0){
//                 element = "bom";
//             }
//             temp.push(element);
//     })
//     return temp;
// }


// let x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let test = bOm(x);
// console.log(test);


function square(arr){
    let temp = [];
    for(i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
        temp.push(arr[i]);
        }
        return temp;
    }



let y = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//let test1 = square(y);
console.log(square(y));