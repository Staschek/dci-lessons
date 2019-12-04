const btnTry0 = document.querySelector('#try0');
const btnTry1 = document.querySelector('#try1');
const btnTry2 = document.querySelector('#try2');
const btnTry3 = document.querySelector('#try3');
btnTry0.addEventListener('click', myFunction0)
btnTry1.addEventListener('click', myFunction1)
btnTry2.addEventListener('click', myFunction2)
btnTry3.addEventListener('click', myFunction3)

//EventHandler

function myFunction0(){
    let heading = document.getElementById('myH2')
    console.log(e.target.id)
    if(e.target.id = 'try0'){
        heading.insertAdjacentHTML('beforebegin', '<p>My New Paragraph "beforebegin" myHeader</p>')
    }
}
function myFunction1(){
    let heading = document.getElementById('myH2')
    heading.insertAdjacentHTML('afterbegin', '<p>My New Paragraph "afterbegin" myHeader</p>')
}
function myFunction2(){
    let heading = document.getElementById('myH2')
    heading.insertAdjacentHTML('beforeend', '<p>My New Paragraph "beforeend" myHeader</p>')
}
function myFunction3(){
    let heading = document.getElementById('myH2')
    heading.insertAdjacentHTML('afterend', '<p>My New Paragraph "afterend" myHeader</p>')
}

const btnTry4 = document.querySelector('#result');
//console.log(btnTry)
btnTry4.addEventListener('click', myFunction4)
function myFunction4(){
    btnTry4.insertAdjacentHTML('afterend', `<p>${42 * 42}</p>`)
}
