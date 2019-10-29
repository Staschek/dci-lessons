let caseSen = "testify";

function checkCase(para){
    let re = /^[A-Z]/;
    if (re.test(para)){
        console.log(true)
    }else{
        console.log(false)
    }
}

checkCase(caseSen)