
const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Emily', 'Frank'];
let firstName = names[0];
let secondName = names[1];
console.log(firstName);
console.log(secondName);

const otherNames = names.slice(2);

for (const name of otherNames) {
  console.log(name);
}

if (otherNames.length < 2) {
  secondName = 'alex';
}
