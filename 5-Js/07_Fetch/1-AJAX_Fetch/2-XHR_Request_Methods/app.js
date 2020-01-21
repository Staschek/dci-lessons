document.getElementById('button').addEventListener('click', loadData)

//EventHandler
function loadData(){
    //Create XHR Request Object
    const xhr =  new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true)
    //console.log(this.responseText)
    //onload methods
    xhr.onload = function (){
        document.getElementById('output').innerHTML = (this.responseText)
    }
    xhr.send();
}

