// function  visitthecity (city){
//     if (city = "Hamburg"){
//         return `you have visited ${city}`;}
//     }
//  document.write(visitthecity(citi))

let citySearch = ["Hamburg", "Frankfurt", "Accra"]
let citiesList = ["Hamburg","Istanbul","Frankfurt", "Berlin", "Kopenhagen"]

function cityIveVisited(citiS, citiV){
    let temp = [];
    let matches = false;
    
    for(i=0; i < citiV.length; i++)
    {matches = false;
        for(j=0; j < citiS.length; j++)
            {if (citiV[i] === citiS[j])
                {matches = true;
                }
            }
    // Check if matches is true. If matches == false, u'll see the unvisited Cities
        if(matches == true)
            {temp.push(citiV[i])
        }
    }
    return `You have visited: ${temp}`
}

document.write(cityIveVisited(citySearch, citiesList))