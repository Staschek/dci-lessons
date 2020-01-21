
// classroom html css js 10 participants name score for every course out of 100

//if failed in 1 course its ok. if he failed 2 courses he failed the year. pass is 50 or more

/* the html structure is table
there are two tables classes passed and noPass
*/
// creating elements to get passers or no passers
let passed=document.querySelector('.passed');// list of participans, who passed
let noPass=document.querySelector('.noPass');//list of no passers
//the participants object array
let part=[
{Name: 'heinz', htmlSc:100, cssSc:49,jsSc:49},
{Name: 'karl', htmlSc:100, cssSc:50,jsSc:50},
{Name: 'hilde', htmlSc:100, cssSc:49,jsSc:50},
{Name: 'karla', htmlSc:73, cssSc:37,jsSc:19},
{Name: 'max', htmlSc:60, cssSc:60,jsSc:60},
{Name: 'fritz', htmlSc:33, cssSc:80,jsSc:79},
{Name: 'willi', htmlSc:70, cssSc:36,jsSc:18},
{Name: 'marie', htmlSc:72, cssSc:59,jsSc:43},
{Name: 'anne', htmlSc:33, cssSc:80,jsSc:79},
{Name: 'mona', htmlSc:73, cssSc:38,jsSc:28}
]

let failCntr;// fail counter

for (x of part){                //forloop usefull for arrays. x (or whatever you call it) represents the object to deal with
console.log(failCntr);
failCntr=0;                 //set to 0 at every new loop

if(x.jsSc<50){failCntr++}
if(x.htmlSc<50){failCntr++}
if(x.cssSc<50){failCntr++}
    
    if(failCntr>1){noPass.appendChild(crtLiE(x.Name,x.htmlSc, x.cssSc, x.jsSc))}else
    {passed.appendChild(crtLiE(x.Name,x.htmlSc, x.cssSc, x.jsSc))}
   // (failCntr>1?passed.appendChild(crtLiE(x.Name,x.htmlSc, x.cssSc, x.jsSc)):noPass.appendChild(crtLiE(x.Name,x.htmlSc, x.cssSc, x.jsSc))}


}

function crtLiE(name,html, css, js){
    // Create element
const tr=document.createElement('tr');
    let td ;

// Create text node and append
td  = document.createElement('td');td.appendChild(document.createTextNode(`${name}`));tr.appendChild(td);
td  = document.createElement('td');td.appendChild(document.createTextNode(`${html}`));tr.appendChild(td);
td  = document.createElement('td');td.appendChild(document.createTextNode(`${css}`));tr.appendChild(td);
td  = document.createElement('td');td.appendChild(document.createTextNode(`${js}`));tr.appendChild(td);

return tr
}
