// *** Closure - function inside a function creates a closed scope. if the same inner function is called multiple times or the output is returned, each inner function keeps individual value of external variable. ***
function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());

console.log(clock1());