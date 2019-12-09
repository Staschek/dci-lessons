const btnTry = document.getElementById('try')
btnTry.addEventListener('click', focusMethod)
let inn = document.querySelectorAll('input')
console.log(inn)
let i=0;
let item = inn[0]
function focusMethod(){
    item.style.background = ''
    item.style.color = ''
    item = inn[i]
    item.focus()
    item.style.background = '#777'
    item.style.color = '#fff'
    i = (i>=inn.length-1?0:i+1)
}