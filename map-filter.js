// *** map is the process of looping into an array and doing something with each element of that array and outputting that result as an array. *** 
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = numbers[i] * numbers[i];
    output.push(result);
}
console.log(output);

//-----------------------------------------------------------

function square(element){
    return element * element;
}

const num = numbers.map(square);
console.log(num);

//-----------------------------------------------------------
    
numbers.map(function(element, index, array){ // function inside map can take highest 3 parameters like this
    console.log(element, index, array);
});

//-----------------------------------------------------------

const square1 = element => element * element;
const square2 = x => x * x;

//-----------------------------------------------------------

const result1 = numbers.map(function(element){ // function inside map can take highest 3 parameters like this
    return element * element;
});

const result2 = numbers.map(x => x * x);

console.log(result1);
console.log(result2);

//-----------------------------------------------------------

const bigger = numbers.filter(x => x > 5); // filter will give you an array
console.log(bigger);

const isThere = numbers.filter(x => x > 5); // special version of filter, which will return only element, no array
console.log(isThere); 