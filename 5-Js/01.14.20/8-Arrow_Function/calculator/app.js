const calc = document.querySelector('.calculator-keys')
const output = document.querySelector('.calculator-screen')
let input;
let operator;
let operand1;
let operand2;
let dot =false;
calc.addEventListener('click', e => {
    //console.log(operand1, operator, operand2)
    //console.log(e.target.parentElement)
     if(e.target.className == '' ){
         if(input == undefined ){
             if(!operand2){
                    if(e.target.value == 0){}
                    else{
                    input = e.target.value 
                    output.value = input
                    } 
            }else{
                    if(e.target.value == 0){}
                    else{
                      /* operand1 = operand2
                      operand2 = undefined;   */
                    input = e.target.value 
                    output.value = input
                    } 
            }
        }else{
            input  += e.target.value
            output.value = input 
        }    
    }
    if(e.target.className ==  'decimal'){
        if(input == undefined){}
        else if(dot){}
        else{
            input  += e.target.value
            output.value = input
            dot = true
        }

    }
    if(e.target.className == 'operator' && input && !operand2){
            dot =false
            operand1 = input;
            input = undefined
            operator = e.target.value
            output.value = e.target.value
            console.log(operand1, operator, operand2)
    }
    else if (e.target.className == 'operator' && operand2 ){
        if( input ){
            dot =false
            input = undefined
            operator = e.target.value
            output.value = e.target.value
            console.log(operand1, operator, operand2)
        }else{
            dot =false
            operator = e.target.value
            output.value = e.target.value
            console.log(operand1, operator, operand2)
        }
            
    }
    if(e.target.className == 'equal-sign operator' && input){
        dot = false
        operand2 = input;
        input = undefined
        if(operator == '+'){
            console.log(operand1 , operand2)
            output.value = sum(operand1, operand2)
        }else if(operator == '-'){
            console.log(operand1 , operand2)
            output.value = minus(operand1, operand2)
        }else if(operator == '*'){
            console.log(operand1 , operand2)
            output.value = multi(operand1, operand2)
        }else if(operator == '/'){
            console.log(operand1 , operand2)
            output.value = devid(operand1, operand2)
        }
        operand1 = output.value
        operator = undefined;
    }
    if(e.target.className == 'all-clear'){
        input = undefined;
        operator = undefined;
        operand1 = undefined;
        operand2 = undefined;
        output.value  = '';
        dot =false
        
    }
}) 

let sum = (operand1, operand2) =>Math.abs(operand1) + Math.abs(operand2)
let multi = (operand1, operand2) => Math.abs(operand1) * Math.abs(operand2)
let devid = (operand1, operand2) => Math.abs(operand1) / Math.abs(operand2)
let minus = (operand1, operand2) => Math.abs(operand1) - Math.abs(operand2)