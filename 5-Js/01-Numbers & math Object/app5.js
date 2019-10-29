const num1 = 111;
const num2 = 222;
let val;

// Simple math with numbers
val = num1 + num2;
//console.log(val)
val = num1 * num2;
//console.log(val)
val = num1 - num2;
//console.log(val)
val = num1 / num2;
//console.log(val)
val = num1 % num2;
//console.log(val)

//Math Object
val = Math.PI;              // Pi als zahl auf
val = Math.E;               // Eulersche Zahl
val = Math.round(2.4);      // Rundet auf oder ab
val = Math.ceil(2.0);       // Rundet nach oben auf
val = Math.floor(2.0);      // Rundet nach unten ab
val = Math.sqrt(64);        // Squareroot
val = Math.abs(-4);         // Absolute Value always Positive
val = Math.pow(8,2);        // Squarenumber of 8
val = Math.min(2,55,35,15,36,125,145,1,54,-54);        // Smalles Number
val = Math.max(2,55,35,15,36,125,145,1,54,-54);        // Bigest Number
val = Math.random();        // Random number from 0-1
val = Math.floor(Math.random() * 20 + 1);        // Random number from 0-20

console.log(val)