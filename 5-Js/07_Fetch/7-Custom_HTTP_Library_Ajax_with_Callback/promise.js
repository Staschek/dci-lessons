let ran = Math.floor((Math.random()*50)+1)
console.log(ran)

// ___****---°°°°---****___ Promise ___****---°°°°---****___
let promise = new Promise((resolve,reject)=>{
    if(ran <= 35){
        resolve('Stuff worked!')
    }else{
        reject(Error('It broke .. :('))
    }
});

//Callback function that execute the function in promise
promise.then((result)=>console.log(result),
(err) => console.log(err)
)


//////////////////////////////////7
function easyHTTP(){
    this.http = new XMLHttpRequest()
}

//Make an HTTP GET Request
easyHTTP.prototype.get = function (url, error, success) {
    
this.http.open('GET', url, true);
// let that = this // ES5 workaround
this.http.onload = () => {
    if(this.http.status === 200){
        //that.http.status
        //that.http.responseText


       // let response = JSON.parse(this.http.responseText)
      //  console.log(response)
        success(this.http.responseText)
        }
    else if(this.http.status === 404 || this.http.status === /5\d\d/ ){
    error('Failure!! Something went wrong')
    }
}
this.http.send()
}


const http = new easyHTTP;

//GET Posts
http.get('https://api.myjson.com/bins/11uh1e', errFunction, sucFunction
)

function errFunction(err){
    console.log(err)
}


function sucFunction(suc){
    suc.shift()
    console.log(suc)
}