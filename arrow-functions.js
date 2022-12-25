/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbersVan(a, b) {
    return a + b;
}

let sum1 = addTwoNumbersVan(2, 5);
console.log(sum1);

// Arrow Function With Parameters
const addTwoNumbersArr = (a, b) => {
    return a + b;
}
let sum2 = addTwoNumbersArr(2, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters
// const addTwoNumbersArrSing = (a, b) => (a + b);
const addTwoNumbersArrSing = (a, b) => a + b;
let sum3 = addTwoNumbersArrSing(2, 5);
console.log(sum3);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("HELLO!");

const sayHello = () => console.log("HELLO!")
sayHello();


// Returning Multiple Lines

const returnMultibleLines = () => (
    `<p>
        Hello
    </p>
    `
);
console.log(returnMultibleLines());