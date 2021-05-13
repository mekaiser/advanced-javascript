// falsy values
// 0
// false
// ""
// undefined
// null
// NaN

//---------------------------------------

// true values
//'0'
// [] - empty array
// {} - empty object
//'false'

let name = 0;
console.log(name); // undefined value, that's why condition is false

// if(name){ // age != 0 then true, age = 0 then false
//     console.log('condition is true');
// }
// else{
//     console.log('condition is false');
// }

if(name || name == 0){ // age != 0 then true, age = 0 then false
    console.log('condition is true');
}
else{
    console.log('condition is false');
}