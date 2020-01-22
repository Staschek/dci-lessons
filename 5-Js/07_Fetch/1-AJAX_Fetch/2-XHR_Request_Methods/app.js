

document.getElementById('button').addEventListener('click', loadData)

//EventHandler
function loadData(){
    //Create XHR Request Object
    const xhr =  new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true)
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
            document.getElementById('output').innerHTML = `<h1 class="display-4">${this.responseText}</h1>`
            
            }
        }

        xhr.onprogress = function(){
            console.log('Readystate: ', xhr.readyState)
            //readyState Value
            //0: Request not initialized
            //1: Server connection established
            //2: request received
            //3: processing request
            //4: request finished and resonse is ready
        }
        
        xhr.onreadystatechange = function(){
            console.log('Readystate: ', xhr.readyState)
            //readyState Value
            if(this.status ===200 && this.readyState === 4){
                console.log(this.responseText)
                console.log('Request error ...', xhr.responseURL)

            }
        }

        xhr.onerror = function(){
            console.log('Request error ...', xhr.responseURL)
        }

    xhr.send();
}

