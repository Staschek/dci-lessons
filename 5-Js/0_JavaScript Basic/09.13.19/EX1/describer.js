let arrOfNumbers = [1,55,3,6, 8, 21, 25];
function describer(array){
    let buffer=[];
    array.forEach(
        function(item) {
            if(item % 2 == 0){
                buffer.push('This is an even Number: ' + item);
            }
            else if(item % 5 == 0){
                buffer.push('This Number [' + item + '] accepts devision by 5')
            }
            else if(item % 7 == 0){
                buffer.push('This Number [' + item + '] accepts devision by 7')
            }
            else{
                buffer.push('This is an odd Number: ' + item)
            }

        })
            return buffer;
        };
let demo = describer(arrOfNumbers);
console.log(demo);

/* Output: 

    ["This is Number:1", "This is Number: 5", "This is Number:3"] 
    Modification:    ["This is an even Number:1", "This is an odd Number: 5", "This is an odd Number:3"] 
    
   Task: function describer
            function input: arrOfNumbers
            function output: arrayOfStrings

    */