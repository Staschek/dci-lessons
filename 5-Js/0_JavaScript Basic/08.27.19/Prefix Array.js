
function prefix (index, prem){
    let temp = [];
    index.forEach(function(element){
        temp.push(prem + element)
    }
    )
    return temp;
}

let input = ['Safwan', 'Stefan', 'Sascha'];
let prem = "Mr. ";
let output = prefix(input, prem);
console.log(output);