let bigGreen = document.querySelector('.mainCont2');
bigGreen.xPosOwn=10;
console.log(bigGreen.xPosOwn);
bigGreen.style=`left: ${bigGreen.xPosOwn}vw;`;
bigGreen.style=`left: ${bigGreen.xPosOwn+20}vw;`;

console.log(bigGreen);
bigGreen.addEventListener('mousemove',bigGreenEv);

function bigGreenEv(e){
    e.target.xPosOwn=e.target.xPosOwn+0.2;
    console.log('hi!',e.target.xPosOwn);
e.target.style=`left: ${e.target.xPosOwn}vw;`;
}
