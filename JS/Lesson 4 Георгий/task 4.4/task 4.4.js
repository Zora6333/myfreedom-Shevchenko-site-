let arr = [5, 4, 3, 8, 0];
let newArr = [];
let a = prompt('Введите число')
function filterFor(arr, a){
for (i = 0; i < arr.length; i++) {
    if (arr[i] >= a) {
        newArr.push(arr[i]);
        console.log(newArr);
    } 
}
}
filterFor(arr, a)