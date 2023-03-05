let name = 'Ваня';
let age = 6;
let obj = {
    age: 23,
    gender: man
}
let { name: lastname = 1, age: years = 2, ...fields } = obj;

console.log(lastname);
console.log(years);
