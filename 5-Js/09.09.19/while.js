function guests (arrayOfGuests, maximumNum){
    let temp = [];
    let num = maximumNum;
    let i = 0;
    while(i < maximumNum){
       //arrayOfGuests.sort();
        temp.push(arrayOfGuests[i])
        i++;
    }
    return [temp, num];
}
let x = [];
let names = ["Alice", "Dieter", "Eduard", "Franz", "Bob", "Carl", "Gertrude", "Hans"];
let demo = guests(names, 5);
let z = demo[1];
demo[0].forEach(function(element){
    console.log("The door is open for " + element);
})
while(z < names.length){
    console.log("The door is closed for " + names[z]);
    z++;
}


