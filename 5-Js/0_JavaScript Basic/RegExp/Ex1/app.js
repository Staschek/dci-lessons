let re;
re =/hello/;
re =/hello/i; //i = case insensitive
re= /hello/g; //g = Global search


// console.log(re);
// console.log(re.source); // the string is the source

// 1 - exec() - return result in an array or null
// const result = re.exec(`hello world will say hello to every hello creature`);
// console.log(result) 
// console.log(result[0]) //return the matched pattern 'hello'
// console.log(result.index) //return the index of the pattern inside the input
// console.log(result.input) //return the input we tested with the pattern
// console.log(result.lastIndex)


// 2 - test() - Return true or false
// const result = re.test(` world will say hello to every creature`);
// console.log(result) 

// 3 - match() - Returns result array or null
// const str = '$§%§%$/Hello there';
// const result = str.match(re);
// console.log(result);


// Exicise Function:
// const str = '$§%§%$/Hello there';

// function checkExp(str,re){
//     if(re.test(str)){
//         return `The Expression ${re.source} is included`
//     }else{
//         return `The Expression ${re.source} is not included`
//     }
// }
// console.log(checkExp(str,re))


// 4 - search() - Return index of the first match, if not found, it returns -1
const str = ' There and hello everyone else hello';
const result = str.search(re);
console.log(result) // return the index of the pattern


// 5 - replace() - Exicise Function:
// where the pattern ist replaced by a new pattern.

// let str = 'The time was: 9';
// let reg =/was: 9/i;
// let edit =/is now: 10/i;
// function checkExp(str,reg, edit){
//     if(reg.test(str)){
//         return str.replace(reg,edit.source)
//     }else{
//         return `The Expression ${reg.source} is not included`
//     }
// }
// console.log(checkExp(str,reg,edit))