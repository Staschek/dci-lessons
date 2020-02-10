const form = document.getElementById('form');
//const form2 = document.getElementById('panel2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const min = 6;
const max = 25;
let logIndex = [0,0];
let regiIndex = [0,0,0];

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if(document.getElementById('panel1').classList.contains('active')){
    checkRequired([email, password]);
    checkLength(password, min, max);
    checkEmail(email);
    console.log(logIndex.reduce((pre, cur) => pre+cur))

    //Login User
    if(logIndex.reduce((pre, cur) => pre+cur) == 2){
      return checkData(email, password)
    }
  }else if(document.getElementById('panel2').classList.contains('active')){
    checkRequired([email1, password1, password2]);
    //checkLength(username, 3, 15);
    checkLength(password1, min, max);
    checkEmail(email1);
    checkPasswordsMatch(password1, password2);
    console.log(regiIndex.reduce((pre, cur) => pre+cur))

    //Register User
    if(regiIndex.reduce((pre, cur) => pre+cur) == 3){
      return regiData(email1, password1)
    }
  }


  //console.log(email1, email, password, password1,password2)
  
})


// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'input-field form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'input-field form-control success';
  if(document.getElementById('panel1').classList.contains('active')){

  }
  else if(document.getElementById('panel2').classList.contains('active')){

  }
}
// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    if(input.parentElement.parentElement.parentElement.id == 'panel1'){
      logIndex[0] = 1;
      showSuccess(input);
    } else if(input.parentElement.parentElement.parentElement.id == 'panel2'){
      regiIndex[0] = 1;
      showSuccess(input);
    }
  } else {
    if(input.parentElement.parentElement.parentElement.id == 'panel1'){
      logIndex[0] = 0;
      showError(input, 'Email is not valid');
    } else if(input.parentElement.parentElement.parentElement.id == 'panel2'){
      regiIndex[0] = 0;
      showError(input, 'Email is not valid');
    }
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
      if(input.parentElement.parentElement.parentElement.id == 'panel1'){
        logIndex[1] = 0;
        showError(
          input,
          `${getFieldName(input)} must be at least ${min} characters`
          );      
      } else if(input.parentElement.parentElement.parentElement.id == 'panel2'){
        regiIndex[1] = 0;
        showError(
          input,
          `${getFieldName(input)} must be at least ${min} characters`
          );      
      }
    } else if (input.value.length > max) {
      if(input.parentElement.parentElement.parentElement.id == 'panel1'){
        logIndex[1] = 0;
        showError(
          input,
          `${getFieldName(input)} must be less than ${max} characters`
          );    
      }else if(input.parentElement.parentElement.parentElement.id == 'panel2'){
        regiIndex[1] = 0;
        showError(
          input,
          `${getFieldName(input)} must be less than ${max} characters`
          );
      }         
    } else {
      if(input.parentElement.parentElement.parentElement.id == 'panel1'){
        logIndex[1] = 1;
        showSuccess(input);
      }else if(input.parentElement.parentElement.parentElement.id == 'panel2'){
        regiIndex[1] = 1;
        showSuccess(input);
      }  
    }
    }
    
    // Check passwords match
    function checkPasswordsMatch(input1, input2) {
      if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
        regiIndex[2] = 0;
      }else{
        regiIndex[2] = 1;
      }
    }
    
    // Get fieldname
    function getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    
 