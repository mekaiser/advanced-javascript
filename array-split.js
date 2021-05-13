const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5); // start from 2nd index, stop before 5th index - show these and doesn't update nums

const removed = nums.splice(2, 3, 77, 88, 99);// start from 2nd index, delete 3 indexes from 2nd - remove these and update nums + insert 77, 88, 99 into the removed area

console.log(part);
console.log(removed);
console.log(nums);

const together = nums.join(""); //remove empty space
const together1 = nums.join(","); //join using comma
const together2 = nums.join(" "); //join using a space
const together3 = nums.join("what!"); //join using what word
console.log(together);
console.log(together1);
console.log(together2);
console.log(together3);