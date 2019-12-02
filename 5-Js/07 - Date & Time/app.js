let val;
//Date Constructor
const today = new Date();
let birthday = new Date('03-08-1986 07:33:05');

birthday = new Date('June 27 1987');

//Date GET Methods
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(9);
birthday.setDate(3);
birthday.setFullYear(1991);
birthday.setHours(13);
birthday.setMinutes(25);
birthday.setSeconds(00);


console.log(val)

// const name = 'Filiz';
// const otherName = 'Rusth';
// const age = 70;
// const otherAge = 90;

// //And OR
// if(name == 'Filiz' && otherName == 'Ruth' || age == 70 && otherAge == 90){
//     console.log('This statement is successful')
// }else{
//     console.log('Not successful')

// }

// console.log(typeof null)

