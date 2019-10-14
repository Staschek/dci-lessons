//Show the position outside the function

let persons = ['Peter', 'Thando', 'Safone', 'Omer', 'Radone'];
let pos = 0;
persons.forEach(
    function(item, index, array) {

        if(item == 'Thando'){
            //pos2
            array[index] = item + ' Lastname'
        }
    }
);

console.log(persons)