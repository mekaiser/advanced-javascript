// *** Hoisting ***

// *** variables declared with let and const are hoisted ***

// *** All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized. ***
let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    // console.log(result);
    // console.log(bonus);
    if(result > 9){
        let mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }
    // console.log(mood);
    return result;
}

const output = sum(3, 7);
// console.log(bonus);
// console.log(output);

console.log(day);
var day = 'friday'; // hoisting will only take the variable declaration to the top, not the value. That's why console.log will give you an undefined value


let day1 = 'monday'; 
console.log(day1); // first declare and initialize, then access using let or const


const day2 = 'sunday';
console.log(day2); // first declare and initialize, then access using let or const