//Selecting the elements from the DOM
const DisplayEl = document.getElementById('display');


const aCButtonEl = document.querySelector('.ac');
const pMButtonEl = document.querySelector('.pm');
const percentButtonEl = document.querySelector('.percent');
const divisionButtonEl = document.querySelector('.division');
const num7ButtonEl = document.querySelector('.number-7');
const num8ButtonEl = document.querySelector('.number-8');
const num9ButtonEl = document.querySelector('.number-9');
const multiplicationButtonEl = document.querySelector('.multiplication');
const num4ButtonEl = document.querySelector('.number-4');
const num5ButtonEl = document.querySelector('.number-5');
const num6ButtonEl = document.querySelector('.number-6');
const subtractionButtonEl = document.querySelector('.subtraction');
const num0ButtonEl = document.querySelector('.number-0');
const num1ButtonEl = document.querySelector('.number-1');
const num2ButtonEl = document.querySelector('.number-2');
const num3ButtonEl = document.querySelector('.number-3');
const decimalButtonEl = document.querySelector('.decimal')
const equalButtonEl = document.querySelector('.equal');

const numberElArray = [num0ButtonEl, num1ButtonEl, num2ButtonEl, num3ButtonEl, num4ButtonEl, num5ButtonEl, num6ButtonEl, num7ButtonEl, num8ButtonEl, num9ButtonEl];

//Functions



// Add event listeners to the elements

// Button AC
aCButtonEl.addEventListener('click', ()=>{
    

    DisplayEl.innerHTML = "0"
})

// Changes AC button depending on screen

DisplayEl.addEventListener('change', ()=>{
    if (DisplayEl.innerHTML != 0){
        aCButtonEl.innerHTML = "C";
    }
})

// Numbers to screen
for(let i = 0; i < numberElArray.length; i++){
    const numberEl = numberElArray[i];

    numberEl.addEventListener('click', ()=>{
                
        DisplayEl.innerHTML += i;
    })


}
