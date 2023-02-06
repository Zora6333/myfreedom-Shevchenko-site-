let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let newArr = []
function neArr() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i])
            alert(newArr + 'Положительное')
        } if (arr[i] < 0) {

            alert('Отрицательно')

        }
    }
}
neArr()