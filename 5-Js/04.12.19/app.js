const btnTry = document.getElementById('try')
btnTry.addEventListener('click', focusMethod)
let inn = ['inpt', 'inpt1', 'inpt2']
let i=0;
let item = document.getElementById(inn[0])
function focusMethod(){
    item.style.background = ''
    item.style.color = ''
    item = document.getElementById(inn[i])
    item.focus()
    item.style.background = '#777'
    item.style.color = '#fff'
    i = (i>1?0:i+1)
}