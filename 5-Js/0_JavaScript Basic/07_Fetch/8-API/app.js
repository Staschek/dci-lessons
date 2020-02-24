document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getApi)

// get local text
function getText(){
    fetch('local.txt')
    .then(function(res){
        return res.text()
    })
    .then(function(data){
        console.log(data)
        document.getElementById('output').innerHTML = data
    })
    // .catch(function(problem){
    //     console.log(problem)
    // })
}

// get local json
function getJson(){
    fetch('local.json')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        //console.log(data)
        //data = JSON.parse(data) 
        console.log(data)
        let output = ''
        data.forEach(item => {
            output += `<li>${item.title}</li>`
        })
       // console.log(output)

        document.getElementById('output').innerHTML = output
    })
    // .catch(function(problem){
    //     console.log(problem)
    // })
}




// get external API
function getApi(){
    // fetch("https://api.github.com/users/Staschek/followers")
    fetch('https://api.github.com/users/FBW4-HEROS/followers')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        //console.log(data)
        //data = JSON.parse(data) 
        console.log(data)
        //console.log(localStorage.getItem('tasks'))     
       // localStorage.setItem('followThem', JSON.stringify(data));

        let output = JSON.parse(localStorage.getItem('followThem'));

        output.forEach(item => {

            output += `<div class="card">
            <img src=${item.avatar_url} class="card-img-top" ></img>
            <br>
            <div class="card-body border">
            ID: ${item.id}<br>
            <h5 class="card-title">User: ${item.login} </h5>
            </div>
            </div>`
            
        })
       // console.log(output)

        document.getElementById('output').innerHTML = output
    })
    // .catch(function(problem){
    //     console.log(problem)
    // })
}



