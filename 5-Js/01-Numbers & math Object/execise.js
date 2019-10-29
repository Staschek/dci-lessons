let lucky, user, div, counter = null, win;

function lotteryFun(){
    for(i=0;i<100;i++){
lucky = Math.floor(Math.random() * 100 + 1);        // Random number from 0-100
user = Math.floor(Math.random() * 100 + 1);        // Random number from 0-100
div = Math.abs(user-lucky);
win = Math.abs((div * 10) - 100);

console.log('Lucky Number ' + lucky);
console.log('User Number ' + user);
console.log('Diverence ' + div);
        if(div < 10){
            counter += win;
            console.log(`You have won ${win}$` ) 
        }
        else {console.log('You are a LOOOOOSER!!!') }
    }
}

lotteryFun();
console.log(`Count Times : ${i}, Counter Winning : ${counter}$`)
