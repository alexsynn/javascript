// import { a, b } from "./for_task.js";

let a = 1;
let b = 155;
var result = (a + b < 4) ? 'Мало' : 'Много';

console.log (result);

var newLi = document.createElement('div');
newLi.innerHTML = result;

document.body.appendChild(newLi);



