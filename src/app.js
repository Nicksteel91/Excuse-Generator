import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function getRandomNumber(min, max) {  /* CAN BE ANY DIGIT (A, MIN, 1, ETC) AS LONG AS IT IS CONSISTENT*/
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(anyArray) {
  let max = anyArray.length - 1; /* it counts from zero */
  let min = 0;
  let random = getRandomNumber(min, max); /* LINK TO 1ST FUNCTION */
  return anyArray[random];

}

window.onload = function () { /*IN ORDER TO WAIT CSS, JS, ETC TO LOAD AND NOT RUN WITHOUT ANY LEFTOVERS */
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when)  /*Inner selector overrides index*/
};
