let middle=document.querySelector('.right');
console.log(middle);

middle.addEventListener('click',sizeUp);
middle.addEventListener('mousedown',sizeUp);

function sizeUp(e){
let mvDiv=document.querySelector('.move2');
    xPosN=mvDiv.offsetLeft;
    console.log('1st', xPosN);
mvDiv.style.left=(xPosN+5+'px');
console.log('na, wenigstens das kannst du.', xPosN);
}
