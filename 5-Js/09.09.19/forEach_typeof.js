
// function prefix (index){
//     let temp = [];
//     index.forEach(function(element){
//         if (typeof element == 'number'){
//         temp.push(element + " is a " + typeof(element))}
//     }
//     )
//     return temp;
// }

// let input = ['Safwan', 'Stefan', 'Sascha', 3, {}, [], 6];

// let prem = "Mr. ";
// let output = prefix(input);
// console.log(output);


/*-------------------------------------------------*/


// let arr = ['B', 'A','C',2, 3, 'D', 1];
// let temp = arr
// temp.sort();
// temp.slice(3,4);
// temp.push('E');
// temp.unshift();
// temp.shift();
// temp.pop();
// console.log(temp);


/*-------------------------------------------------*/

let arr = ['B', 'A','C',2, 3, 'D', 1];
function minmaxout(array){
    let temp = array
    temp.sort();
    temp.shift();
    temp.pop();
    return temp;
}


let demo = minmaxout(arr);
console.log(demo);