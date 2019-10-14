// function permit(age,exam){
//   if(age >= 18 && exam >= 40){
//     console.log("u r allowed to have license")
//   }
//   else if(age >= 89 && exam >= 40){
// console.log("u should first go to dr.")
//   }
//   else{
//     console.log("u r not allowed")
//   }
// }
// permit(90,40)



// function rule(currentTime,onTime){
//   if(currentTime >onTime && currentTime<= 10.30 ){
//     console.log("wait till break")
//   }else if(currentTime > 10.30 ){
//     console.log("enter the class silently")
//   }
  
//   else{
//     console.log("get the fuckin u r early")
//   }
// }
// rule(9.04,9.05)

// function evenOdd(x){
//   if(x % 2===0){console.log("even")
//   }
  
// else{
//   console.log("odd")
// }}
// evenOdd(9)

// function distance(x,y){
//   if(x > y && x >= 0 && y >= 0 ){
//     console.log(x-y)
//   }else if(x <= y){
//     console.log(y-x)
//   }
//   else if(y < 0 ){
//     console.log(-(y-x) )
//   }

//   else{
//     console.log(-(x-y))
//   }
// }
// distance(11,-10)


// function myZodiac(month ,Aries,Taurus,Gemini ,Cancer,Leo ,Virgo, Libra,Scorpio, Sagittarius, Capricorn ,Aquarius ,Pisces ,){
//   if (month == "january" && day)
// }


// var x = 5
// function addone(x){
//   console.log(x);
//   return x + 1;
// }
// addone(5);
// var y = addone(x);
// addone(x);
// console.log(addone(x) + y)
// function checkLength(arr){
//   if (arr.length < 4  ){ 
//     console.log("normal array")}
 
// else{
//   console.log(" very long array")
// }
// };
// let list = ['jay','lo'];
// checkLength (['jay','stefan','ruth',2,3]);
// checkLength(list);


// function myFunction(arr){
//   console.log(arr[0], arr[3] );
//    console.log(arr[arr.length - 1]);
// }
// let arr = [1,2,5,9,10];
// myFunction(arr)
  

  //  let fruit = [3,4,68];

  //  fruit.forEach(function(item){
  //   console.log(item * item)
  //  })

//  let team = ['odene','fliz'];
//  let team2 = ['jay','lpo'];
 
//  team2.forEach(function(item){
//    team.push(item);
//   //  console.log(item)
// })
// console.log(team);


// let numbers = [2,4,7];
// let evenNumbers = [];
// numbers.forEach(function(item){
//   if(item% 2 == 0){
//     evenNumbers.push(item)
//   }
// })
// console.log(evenNumbers);

//   let evenArr = [22,44,66,88];
//   let oddArr = [33,55,82,77,99];
//   let arr2 = [];



// function giveEvenArray(arr1){
//   arr1.forEach(function(item){
//   if(item %2 == 0){ 
//      arr2.push(item)
//      };
//   })
//   return arr2;
// }

// giveEvenArray(evenArr);

// console.log(arr2);



// function leapYear(arr){
//   let temp=[];
//     arr.forEach(function(item){
//       if((item %4 == 0) || (item %100 == 0) || (item % 400 == 0)){
//         temp.push(item)
//       };
     
//     })
//    return temp;
// }
// let array1 = [1990,1991,2012,2004,1996];
// leapYear(array1);
// console.log(leapYear(arr))1y



function myFunction(x,y){
  let result = [];
  
  x.forEach(function(item){
    result.push(y + item)
   
  })
return  result 
}
let name = ['safwan','jay','stefan']
let demo = myFunction(name,'Mr. ');
console.log(demo)