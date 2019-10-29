

function LeapYear (array){
  let temp = [];
  array.forEach(function(year){
  if ((year % 4 === 0 && year % 100 !== 0 ) || (year % 100 === 0 && year % 400 === 0)){

      temp.push(year)
      }

    }
  )
  return temp;
}


let arrayYears = [1998,2012,2000,2004,2019,1984,1986,1972,1956];
let demo = LeapYear(arrayYears);
console.log(demo);