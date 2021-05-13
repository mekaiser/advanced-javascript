const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maanaaaaa'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Deepjol'}
];

//---------------------------------------------------

// Self solution 01
const names1 = [];

for(let i = 0; i < students.length; i++){
    const {name} = students[i];
    names1.push(name);
}

console.log(names1);

//---------------------------------------------------

// Self solution 02
const names2 = [];
const result = students.map(element =>{
    const {name} = element;
    names2.push(name);
})

console.log(names2);

//---------------------------------------------------

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger1 = students.filter(s => s.id > 40);
const bigger2 = students.find(s => s.id > 40);

console.log(names);
console.log(ids);
console.log(bigger1);
console.log(bigger2);