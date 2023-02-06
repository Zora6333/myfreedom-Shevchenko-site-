const users = [{ name: 'Vasya', age: 23 },
{ name: 'Olya', age: 12 },
{ name: 'Anna', age: 22 },
{ name: 'Alex', age: 18 },
{ name: 'Valery', age: 8 }]

for (i = 0; i < users.length; i++) {
    let names = users.map(item => item.name);
    let age = users.map(item => item.age);
    if (age > 15) {

        alert(names)
    }
}
