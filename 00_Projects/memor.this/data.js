console.log()
let users;
//let user_db = 

function regiData(mail,pw) {
    //registerIndicator for loop throug data
    let rI = 0;
    if(localStorage.getItem('users') === null) {
        users = [];
      } else {
        users = JSON.parse(localStorage.getItem('users'));
      }
      
      for(user of users){
            if(user.user == mail.value){
              email1.classList = 'form-control validate invalid'
              rI = 1;
              showError(email1, 'Email is already taken');
            }else if(user.user != mail.value){
                email1.classList = 'form-control validate valid'
            }
        }   
        
        if(rI == 0){
            users.push({
                'user': mail.value,
            'password': pw.value
        });
        localStorage.setItem('users', JSON.stringify(users));
        setTimeout(() => {
            window.location ='./index.html'
        },4000)
    }

    // var user_db = JSON.stringify(users);

    // var fs = require('fs');
    // fs.writeFile("user_db.json", user_db);
            
    //console.log(users)
    
    
    
    rI = 0;
    //   e.preventDefault();
    console.log('end of Regi')
}


function checkData(mail,pw) {
    //Login Indicator for loop throug data
    let lI = 0
    if(localStorage.getItem('users') === null) {
        users = [];
      } else {
        users = JSON.parse(localStorage.getItem('users'));
      }

      for(user of users){
        if(user.user == mail.value && user.password == pw.value){
            lI = 1;
            showSuccess(password)
            console.log('Login the User')
            setTimeout(function(){
                window.location ='./index.html'
              },3000)
        }else if(user.user != mail.value && user.password != pw.value && lI == 0){
            showError(password, 'Email or Password is not correct');
        }
      }
}

/*
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

*/