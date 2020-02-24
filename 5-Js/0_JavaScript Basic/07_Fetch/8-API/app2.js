const http = new EasyHTTP

//Get Users
// http.get("https://api.github.com/users/FBW4-HEROS/followers")
// .then(info => console.log(info))
// .catch(failure => console.log(failure))


//Get Users
const user = {
    name: 'Mr. Harris',
    username : 'bombermann',
    email: 'harris@gmail.com'
}

// //Post User

http.post('https://jsonplaceholder.typicode.com/users', user)
.then(info => console.log(info))
.catch(err => console.log(err))

// //Put User

// http.put('https://jsonplaceholder.typicode.com/users/7', user)
// .then(info => console.log(info))
// .catch(err => console.log(err))

//Delete User

// http.delete('https://jsonplaceholder.typicode.com/users/7')
// .then(info => console.log(info))
// .catch(err => console.log(err))