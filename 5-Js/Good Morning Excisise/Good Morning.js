////////////////////////////////////////////////
// C-191104
////////////////////////////////////////////////


////////////////////////////////////////////////
// Good Morning
////////////////////////////////////////////////
document.write("Good Morning")

//Priorität:
// 1: Time 2:Stops 3: Km

let route1 = {
    km: 16,
    time: 400,
    stops: 12
}

let route2 = {
    km: 26,
    time: 80,
    stops: 1
}

let route3 = {
    km: 88,
    time: 140,
    stops: 4
}

let routes = [route1, route2, route3]

function findWay(arr) {
let temp=arr[0];
    for (i = 0; i < arr.length; i++) {  
        if (arr[i].time < temp.time) {
            temp = arr[i];
        } else if (arr[i].time == temp.time) {
            if (arr[i].stops < temp.stops) {
                temp = arr[i];
            } else if (arr[i].stops == temp.stops) {
                if (arr[i].km < temp.km) {
                  temp = arr[i];
                }
            }
        }
    }
   return temp
}

console.log(findWay(routes))




























