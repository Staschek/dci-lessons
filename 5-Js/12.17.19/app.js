document.getElementById('loan-form').addEventListener('submit', calcul);

const amount = document.getElementById('interest');
const interest = document.getElementById('years');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
const loader = document.getElementById('loading')
const results = document.getElementById('results')
//console.log(amount,interest,years, monthlyPayment, totalPayment, totalInterest)

//Calculate Results
function calcul(e){
    e.preventDefault()
    console.log('yeah fuck!')
    loader.style = 'display: block; '
    results.style = 'display: none'

    setTimeout(function(){
        //Clear Loader & Show Result
        loader.style = 'display: none'
        results.style = 'display: block;'

    }, 2000)

//Princeples
let amountValue = parseFloat(amount.value)
let interestValue = parseFloat(interest.value) / 100 / 12;
let yearsValue = parseFloat(years.value) * 12;

//compute monthly payment
const x = Math.pow(1+ interestValue, yearsValue);
const monthly = (amountValue*x*interestValue) / (x-1);

    if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * yearsValue).toFixed(2)
    totalInterest.value = ((monthly * yearsValue) - amountValue).toFixed(2)
    
    }
}