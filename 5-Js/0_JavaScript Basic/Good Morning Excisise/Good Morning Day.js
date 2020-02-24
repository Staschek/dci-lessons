////////////////////////////////////////////////
// C-191105
////////////////////////////////////////////////


////////////////////////////////////////////////
// Good Morning Day
////////////////////////////////////////////////
document.write("Good Morning")

/*
2 Is it a weekend?
Create a function that accepts a specific date given as an argument and returns a message if the day of the specific date is a weekend day or not.
You may want to use the getDay function to have access to which day it is. This returns a number from 0D- to 6.
0 Sunday,
1 is Monday,
6 is for Saturday etc.
You may find this info useful if you want to check what day a specific date is.
*/


// let color = 'yellow', day;
//     switch(color){
//         case 'green':
//           day = 'Sunday';
//           break;
//         case 'blue':
//           day = 'Monday';
//           break;
//         case 'yellow':
//           day = 'Tuesday';
//           break;
//         case 'red':
//           day = 'Wednesday';
//           break;
//         case 'pink':
//           day = 'Thursday';
//           break;
//         case 'black':
//           day = 'Friday';
//           break;
//         case 'white':
//           day = 'Saturday';
//           break;
//       }

// console.log(`${color} is ${day}`);

// const todo = {
//   list: [],
//   add: function(item){
//     this.list.push(item)
//   },
//   edit: function(id, edit){
//     this.list[id]=edit
//   }
// }

// todo.delete = function(){
// }

// todo.add('eat');
// todo.edit(2,'cook');
// console.table(todo.list);





////////////////////////////////////////////////
// C-191106
////////////////////////////////////////////////


////////////////////////////////////////////////
// Good Morning Day
////////////////////////////////////////////////

let arrayOfTimes = ['5-12', '12-18', '18-24', '0-5']

function greeting(arr){
  let time = new Date();
    arr.forEach( function (element){
      let reg = `{/[${element}]/}`
      
      console.log( typeof reg)
    }
  )
}
greeting(arrayOfTimes)



