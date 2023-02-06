let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
function SumItem() {
    let sum = 0
    for (i = 0; i < numbers.length; i++) {
        {sum += numbers[i]
        console.log(sum)}
    } 
}
SumItem()

