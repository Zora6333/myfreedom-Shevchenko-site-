let firstNumber = prompt('- балл за экзамен (от 0 до 100)');
let secondNumber = prompt('- количество выполненных проектов (от 0 и больше)');

if (firstNumber >= 90 || secondNumber >= 10){
    alert("100");
} else if (firstNumber >= 75 || secondNumber >= 5){
    alert("90");
}
 else if (firstNumber >= 50 || secondNumber >= 2){
    alert("75");
}
else if (firstNumber < 50 || secondNumber < 2){
    alert("0");;
}