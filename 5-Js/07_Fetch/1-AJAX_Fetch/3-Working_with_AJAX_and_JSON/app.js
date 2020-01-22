document.getElementById('login').addEventListener('click', checkValid)
let uName = document.getElementById('name')
let passW = document.getElementById('passw')




function checkValid(e){
    console.log(uName.value)
    console.log(passW)
    //Create XHR Request Object
    const xhr =  new XMLHttpRequest();
 xhr.open('GET', 'user.json', true)
 //console.log(this.responseText)
 //onload methods
     xhr.onload = function (){
         console.log('The HTTP Status', this.status)
         //HTTP Status
         //200: "OK"
         //400: "Bad Request"
         //403: "Forbidden"
         //403: "Not Found"
         if(this.status === 200){
         
            
            document.getElementById('costumer').innerHTML = `<p class="lead">${this.responseText[1]}</p>`
         
         }
     }

    //  xhr.onprogress = function(){
    //      console.log('Readystate: ', xhr.readyState)
    //      //readyState Value
    //      //0: Request not initialized
    //      //1: Server connection established
    //      //2: request received
    //      //3: processing request
    //      //4: request finished and resonse is ready
    //  }
     
     xhr.onreadystatechange = function(){
         console.log('Readystate: ', xhr.readyState)
         //readyState Value
         if(this.status ===200 && this.readyState === 4){
             let data = JSON.parse(this.responseText)
             console.log(data)
             data.forEach(function(item){
                 //console.log('asdasdasdas')
                 if(item.name == uName.value && item.password == passW.value){
                     document.write(`<p class="display-4">Hello ${item.name},<br> Welcome Back!</p>`)
                 }
             })
            // console.log('Request error ...', xhr.responseURL)

         }
     }

     xhr.onerror = function(){
         console.log('Request error ...', xhr.responseURL)
     }

 xhr.send();
}




document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)
    
    xhr.onload = function(){
        console.log(this.status)
        let output = ''
        if(this.status === 200){
        //if(response.type === 'success'){
            let response = JSON.parse(this.responseText)
            console.log(response.value)
            response.value.forEach(function(item){
                output += `<li>${item.joke}</li>`
            })
        }else{
            output += `<li>Something went wrong</li>`
        }
        document.querySelector('.jokes').innerHTML = output

    }
    xhr.send();
    e.preventDefault();
}