let lucky, user, div, counter = null, win;

function lotteryFun(user){
lucky = Math.floor(Math.random() * 100 + 1);        // Random number from 0-100
div = Math.abs(user-lucky);
win = Math.abs((div * 10) - 100);
if(user == lucky){
    return  `You have won ${100}$` 
}
else if(div < 10){
    counter += win;
    return `You have won ${win}$`
}
else {return 'You are a LOOOOOSER!!!' }
}
for(i=0;i<100;i++){
    
    lotteryFun(66);
    console.log('Lucky Number ' + lucky);
    console.log('Diverence ' + div);
}
console.log(`Count Times : ${i}, Counter Winning : ${counter}$`)
