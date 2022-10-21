//Selecting the elements from the DOM
const DisplayEl = document.getElementById("display");

const aCButtonEl = document.querySelector(".ac");
const pMButtonEl = document.querySelector(".pm");
const percentButtonEl = document.querySelector(".percent");
const divisionButtonEl = document.querySelector(".division");
const num7ButtonEl = document.querySelector(".number-7");
const num8ButtonEl = document.querySelector(".number-8");
const num9ButtonEl = document.querySelector(".number-9");
const multiplicationButtonEl = document.querySelector(".multiplication");
const num4ButtonEl = document.querySelector(".number-4");
const num5ButtonEl = document.querySelector(".number-5");
const num6ButtonEl = document.querySelector(".number-6");
const subtractionButtonEl = document.querySelector(".subtraction");
const num0ButtonEl = document.querySelector(".number-0");
const num1ButtonEl = document.querySelector(".number-1");
const num2ButtonEl = document.querySelector(".number-2");
const num3ButtonEl = document.querySelector(".number-3");
const additionButtonEl = document.querySelector(".addition");
const decimalButtonEl = document.querySelector(".decimal");
const equalButtonEl = document.querySelector(".equal");

const numberElArray = [
  num0ButtonEl,
  num1ButtonEl,
  num2ButtonEl,
  num3ButtonEl,
  num4ButtonEl,
  num5ButtonEl,
  num6ButtonEl,
  num7ButtonEl,
  num8ButtonEl,
  num9ButtonEl,
];

const operatorElArray = [
  divisionButtonEl,
  multiplicationButtonEl,
  subtractionButtonEl,
  additionButtonEl,
];

let currentOperator;

let calcMemory;

let currentValue = 0;

let result;

//Functions

// Add event listeners to the elements

// Button AC
aCButtonEl.addEventListener("click", () => {
  DisplayEl.innerHTML = "0";
  aCButtonEl.innerHTML = "AC";
  currentValue = 0;
  currentOperator = null;

  for (i = 0; i < operatorElArray.length; i++) {
    operatorElArray[i].classList.remove("actived");
  }
});

// AC to C to AC

const buttonToAC = () => {
  if (DisplayEl.innerHTML == 0) {
    aCButtonEl.innerHTML = "AC";

    // changes the screen at the start of the typing to nothing
    DisplayEl.innerHTML = "";
    decoloredFunction();
  }
};

const buttonToC = () => {
  if (DisplayEl.innerHTML != 0) {
    aCButtonEl.innerHTML = "C";
  }
};

// +-

pMButtonEl.addEventListener("click", () => {
  currentValue = DisplayEl.innerHTML;

  if (currentValue > 0) {
    currentValue = currentValue * -1;
  } else if (currentValue < 0) {
    currentValue = currentValue * -1;
  }

  DisplayEl.innerHTML = currentValue;
});

// 1%

percentButtonEl.addEventListener("click", () => {
  currentValue = DisplayEl.innerHTML;
  let percentValue = currentValue / 100;
  DisplayEl.innerHTML = percentValue;
});

// add comma to the numbers (make them float)

decimalButtonEl.addEventListener("click", () => {
    
    let substring = "."
    let string = DisplayEl.innerHTML;
    
    if(string.includes(substring)){
        return;
    }
    else {
        DisplayEl.innerHTML += ".";
    }
});

// Numbers to screen
for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];

  numberEl.addEventListener("click", () => {
    decoloredFunction();

    buttonToAC();

    if (currentOperator && currentValue === 0) {
      DisplayEl.innerHTML = "";
    }

    DisplayEl.innerHTML += i;

    currentValue = DisplayEl.innerHTML;

    buttonToC();
  });
}

// maths

const coloredFunction = (e) => {
  e.path[0].classList.add("actived");
};

const decoloredFunction = () => {
  for (i = 0; i < operatorElArray.length; i++) {
    operatorElArray[i].classList.remove("actived");
  }
};

//  OPERATORS functions
for (i = 0; i < operatorElArray.length; i++) {
  operatorElArray[i].addEventListener("click", (e) => {
    decoloredFunction();
    coloredFunction(e);

    calcMemory = DisplayEl.innerHTML;

    currentOperator = e.path[0].innerHTML;

    currentValue = 0;
  });
}

// EQUAL =======

const equal = () => {
  if (currentOperator) {
    switch (currentOperator) {
      case "+":
        result = Number(calcMemory) + Number(currentValue);
        break;
      case "-":
        result = Number(calcMemory) - Number(currentValue);
        break;
      case "÷":
        result = Number(calcMemory) / Number(currentValue);
        break;
      case "×":
        result = Number(calcMemory) * Number(currentValue);
        break;
    }
    DisplayEl.innerHTML = result;
    calcMemory = result;
    result = null;
  }
};

equalButtonEl.addEventListener("click", equal);
