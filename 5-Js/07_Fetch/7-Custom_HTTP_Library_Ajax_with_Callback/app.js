const http = new easyHTTP;

//GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', errFunction,sucFunction
)

function errFunction(err){
    console.log(err)
}


function sucFunction(suc){
    console.log(suc)
}








// let arr = ['that', ()=> this, this] //this bubbled to window
// console.log(arr)
// let x = arr[1]()
// console.log(x)
