import axios from 'axios';
import calculate from './calculator';
import './style.scss';

"use strict";

const buttons = document.querySelectorAll("button");
const calc = document.querySelector(".calculation");
const result = document.querySelector(".result");

function clearScreen(input) {
  if (input !== "clear") {
    calc.innerHTML = input;
    result.innerHTML = "";
  } else {
    calc.innerHTML = "0";
    result.innerHTML = "";
  }
}

function saveHandler(num) {
  console.log(num);
}

function keyPressHandler(e) {
  let input = e.target.value;
  let currentCalc = calc.innerHTML; 
  let currentResult = result.innerHTML;

  input === "save" ?
    saveHandler(currentResult) :
  input === "clear" | result.innerHTML ?
    clearScreen(input) :
  input === "=" ?
    calculate(currentCalc, calc, result) :
  currentCalc === "0" ? 
    calc.innerHTML = input: 
    calc.innerHTML = currentCalc + input;
}

// Add click event listener to all the keypad buttons
buttons.forEach(button => {
  button.addEventListener("click", event => {
    keyPressHandler(event)
  })
});
