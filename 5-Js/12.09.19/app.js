const btn = document.querySelector('.btn')
const inpt = document.querySelector('.inpt')
let textArea = document.querySelector('textarea')

let line = new Array(50).join('-')+'\n'
inpt.onkeydown = giveKeyBack
inpt.onkeyup = giveKeyBack
btn.onclick = clearArea

function giveKeyBack(e){
console.log(e.type)
console.log(e.key)
console.log(e.code)
console.log(e.repeat)
textArea.value += `Key: ${e.key} 
Type: ${e.type}
Code: ${e.code}
${(e.altKey) ? `altKey`: ''}
${line}
`
}

function clearArea(){
    inpt.value = ''
    textArea.value = ''
}

/*
const myPic = document.getElementById('pic');
// myPic.addEventListener('mousedown', bulbIO)
// myPic.addEventListener('mouseup', bulbIO)
// myPic.addEventListener('mouseover', bulbIO)
// myPic.addEventListener('mouseout', bulbIO)

function bulbIO(e){
    if(e.type == 'mousedown' || e.type == 'mouseover'){
        myPic.setAttribute('src', "bulbon.gif")
    }
    else {
        myPic.setAttribute('src', "bulboff.gif")
    }
}


///////onEvent = some code
myPic.onmousedown = bulbIO
myPic.onmouseup = bulbIO
myPic.onmouseover = bulbIO
myPic.onmouseout = bulbIO
*/

