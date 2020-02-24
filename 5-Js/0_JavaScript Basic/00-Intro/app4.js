let val;
let par;

//Number to String
val = 666;
par = String(val)
par = String(val+4)

//Boolean to String
val = true;
par = String(val)
//console.log(par == val)  //with val = true: = true ; == false  ; === false
//console.log(par == val)  //with val = 1: = true ; == true  ; === false

//Date to String
val = new Date();
par = String(val)

//Array to String
val = [1,2,3,4,5];
par = String(val)

// to String
val = [1,2,3,4,5];
par = val.toString()

// Output above
//console.log(par.length)

//String to Number
val = '666';
par = Number(val)

//Boolean to Number
val = true;
par = Number(val)

//null to Number
val = null;
par = Number(val)

//NaN String to Number
val = `hello${25}`;
par = Number(val)

//Array to Number
val = [1,2,3,4,5];
par = Number(val)

//parseInt & parseFloat
val = '666.789';
par = parseInt(val)
par2 = parseFloat(val)

//Output
//console.log(val)
//console.log(typeof val)
//console.log(par)
//console.log(par2)
//console.log(typeof par)
//console.log(par2.toFixed(2)) //xxx.xx
//console.log(par == val)

//NaN concept:
function checkNan(x){
    if(isNaN(x)){
        return NaN;
    }
    return x;

}
console.log(checkNan('1'))
console.log(checkNan('hei'))
