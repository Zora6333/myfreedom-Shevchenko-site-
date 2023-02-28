//1)

//Задать объект с полем name.

//Задать переменную, которая будет хранить JSON упомянутого объекта.

//Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

let student = {
    name: 'John'
};
let remember = JSON.stringify(student);
remember = JSON.parse(remember);

//2)//

//Создать переменную user, в которой хранится объект.//

//Записать переменную в localStorage.//

//Создать переменную newUser, в которой будет храниться JS объект из localStorage//
let user = {
    namber: 1
};
localStorage.setItem('user', JSON.stringify(user));
let newUser = localStorage.getItem('user');