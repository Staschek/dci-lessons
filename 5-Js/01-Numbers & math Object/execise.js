let lucky, user, div, counter, count, win;
function lotteryFun(){

lucky = Math.floor(Math.random() * 100 + 1);        // Random number from 0-20
user = Math.floor(Math.random() * 100 + 1);        // Random number from 0-20
div = Math.abs(user-lucky);
win = Math.abs((div * 10) - 100);
console.log('Lucky Number ' + lucky);
console.log('User Number ' + user);
console.log('Diverence ' + div);

    if(div < 10){
        return `You have won ${win}$`
        counter += win;
        count++
    }
    return 'You are a LOOOOOSER!!!'
}

console.log(lotteryFun())