
var x = function(input){
    var temp = [];
     input = ['Safwan', 'Stefan', 'Sascha', 3, {}, [], 6];
    input.forEach(function(element){
        if (typeof element == 'number'){
        temp.push(element + " is a " + typeof(element))}
    }
    )
    return temp;
}
console.log(x.value);