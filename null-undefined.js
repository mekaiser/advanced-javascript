// *** null needs to be explicitly defined by developers ***
let pakhi; // value not assigned, that's why undefined
console.log(pakhi);

// ----------------------------------------------------

function add1(num1, num2){
    console.log(num1 + num2);
}
const result = add1(13, 82);
console.log(result); // no return, that's why undefined

// ----------------------------------------------------

function add2(num1, num2){
    console.log(num1, num2);
}
const result = add2(13); // 2nd parameter not passed, that's why undefined
console.log(result);

// ----------------------------------------------------

const premik = {
    name: "smart",
    phone: 455662
}
console.log(premik.gf); // there is no property named gf, that's why undefined

//----------------------------------------------------

let fun = undefined; // don't try this, not recommended
console.log(fun);