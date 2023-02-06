   let num = prompt('Введите число');
    let arr = [10, 24, 32, 1, 44, 53, 64, 75, 8, 9, 0];
    let newArr = [];
    function showArray() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            newArr.push(arr[i]);
            console.log(newArr);
        } 
    }
}
showArray()